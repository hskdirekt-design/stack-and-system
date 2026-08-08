(function () {
  var canvas = document.getElementById("stack-canvas");
  var stage = document.getElementById("hero-stage");
  if (!canvas || !stage || typeof THREE === "undefined") return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isSmall = window.innerWidth < 640;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.6, 6.2);

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 2));

  function size() {
    var w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  // ---- Signature motif: three translucent stacked "layer" planes, matching the logo ----
  var group = new THREE.Group();
  scene.add(group);

  var layerColors = [0x6d5ef8, 0x9678fa, 0xa78bfa];
  var layers = [];
  var layerGeo = new THREE.CircleGeometry(1.55, 4); // diamond via 4-sided circle
  layerGeo.rotateZ(Math.PI / 4);

  for (var i = 0; i < 3; i++) {
    var mat = new THREE.MeshBasicMaterial({
      color: layerColors[i],
      transparent: true,
      opacity: 0.55 - i * 0.08,
      side: THREE.DoubleSide,
    });
    var mesh = new THREE.Mesh(layerGeo, mat);
    mesh.position.y = 1.1 - i * 1.05;
    mesh.rotation.x = Math.PI / 2.5;
    mesh.scale.setScalar(1 - i * 0.14);
    group.add(mesh);
    layers.push(mesh);

    // edge outline for crispness
    var edges = new THREE.EdgesGeometry(layerGeo);
    var line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: layerColors[i], transparent: true, opacity: 0.9 })
    );
    line.position.copy(mesh.position);
    line.rotation.copy(mesh.rotation);
    line.scale.copy(mesh.scale);
    group.add(line);
  }

  // ---- Connecting nodes / particles drifting around the stack ----
  var nodeCount = isSmall ? 26 : 46;
  var nodeGeo = new THREE.BufferGeometry();
  var positions = new Float32Array(nodeCount * 3);
  var speeds = [];
  for (var n = 0; n < nodeCount; n++) {
    var radius = 2.2 + Math.random() * 1.6;
    var angle = Math.random() * Math.PI * 2;
    var yPos = (Math.random() - 0.5) * 3.2;
    positions[n * 3] = Math.cos(angle) * radius;
    positions[n * 3 + 1] = yPos;
    positions[n * 3 + 2] = Math.sin(angle) * radius;
    speeds.push(0.05 + Math.random() * 0.15);
  }
  nodeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  var nodeMat = new THREE.PointsMaterial({
    color: 0xa78bfa,
    size: 0.045,
    transparent: true,
    opacity: 0.75,
    sizeAttenuation: true,
  });
  var points = new THREE.Points(nodeGeo, nodeMat);
  scene.add(points);

  size();
  window.addEventListener("resize", size);

  var clock = new THREE.Clock();
  var running = true;

  function animate() {
    if (!running) return;
    var t = clock.getElapsedTime();
    group.rotation.y = t * 0.28;
    layers.forEach(function (m, i) {
      m.position.y = 1.1 - i * 1.05 + Math.sin(t * 0.9 + i) * 0.06;
    });
    points.rotation.y = t * 0.06;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  if (reduceMotion) {
    // Render a single static frame, gently posed, and stop.
    group.rotation.y = 0.4;
    renderer.render(scene, camera);
  } else {
    animate();
  }

  // Pause rendering when the hero is off-screen to save battery/CPU
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !running) {
            running = true;
            animate();
          } else if (!entry.isIntersecting) {
            running = false;
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(stage);
  }
})();
