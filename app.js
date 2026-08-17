(() => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  const setupMobileNavigation = () => {

    const button = $(".mobile-toggle");
    const navigation = $(".nav-links");

    if (!button || !navigation) return;


    const closeMenu = () => {

      navigation.classList.remove("is-open");

      button.setAttribute(
        "aria-expanded",
        "false"
      );

    };


    const toggleMenu = (event) => {

      event.preventDefault();
      event.stopPropagation();

      const isOpen =
        navigation.classList.contains("is-open");


      if (isOpen) {

        closeMenu();

      } else {

        navigation.classList.add("is-open");

        button.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    };


    /*
     * Use pointerdown as well as click.
     * This makes the menu reliable on desktop testing,
     * mobile browsers and touch devices.
     */

    button.addEventListener(
      "pointerdown",
      (event) => {

        event.preventDefault();

      }
    );


    button.addEventListener(
      "click",
      toggleMenu
    );


    $$(".nav-links a").forEach(
      (link) => {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );


    document.addEventListener(
      "click",
      (event) => {

        if (
          !navigation.classList.contains("is-open")
        ) return;


        if (
          navigation.contains(event.target) ||
          button.contains(event.target)
        ) return;


        closeMenu();

      }
    );


    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth > 900
        ) {

          closeMenu();

        }

      }
    );

  };


  setupMobileNavigation();


  /* =========================================================
     3D SYSTEM NODES
     ========================================================= */

  const visual = $(".hero-visual");


  if (visual) {

    const nodes = [
      {
        selector: ".node-1",
        number: "01",
        title: "IDEA",
        description: "Find an opportunity",
        href: "solutions.html"
      },
      {
        selector: ".node-2",
        number: "02",
        title: "AI",
        description: "Choose the right tools",
        href: "ai.html"
      },
      {
        selector: ".node-3",
        number: "03",
        title: "AUTOMATION",
        description: "Connect the workflow",
        href: "automation.html"
      },
      {
        selector: ".node-4",
        number: "04",
        title: "PRODUCT",
        description: "Build something useful",
        href: "products.html"
      },
      {
        selector: ".node-5",
        number: "05",
        title: "OUTCOME",
        description: "Measure the result",
        href: "money.html"
      }
    ];


    nodes.forEach(
      (item, index) => {

        const original =
          $(item.selector, visual);

        if (!original) return;


        let node;


        if (
          original.tagName.toLowerCase() === "a"
        ) {

          node = original;

        } else {

          node =
            document.createElement("a");

          node.href =
            item.href;

          node.className =
            original.className;

          original.replaceWith(node);

        }


        node.classList.add(
          "system-node",
          `system-node-${index + 1}`
        );


        node.setAttribute(
          "aria-label",
          `${item.number} ${item.title}: ${item.description}`
        );


        node.innerHTML = `
          <span class="node-number">
            ${item.number}
          </span>

          <strong>
            ${item.title}
          </strong>

          <small>
            ${item.description}
          </small>
        `;

      }
    );


    /* ---------------------------------------------------------
       SYSTEM CORE
       --------------------------------------------------------- */

    const core =
      $(".system-core", visual);


    if (core) {

      core.innerHTML = `
        <div class="core-inner">

          <span class="core-label">
            SYSTEM ENGINE
          </span>

          <strong>
            AI
          </strong>

          <span class="core-status">
            ONLINE
          </span>

        </div>
      `;

    }


    /* ---------------------------------------------------------
       EXTRA 3D ORBITS
       --------------------------------------------------------- */

    if (
      !$(".system-glow", visual)
    ) {

      const glow =
        document.createElement("div");

      glow.className =
        "system-glow";

      visual.prepend(glow);

    }


    if (
      !$(".orbit-two", visual)
    ) {

      const orbit =
        document.createElement("div");

      orbit.className =
        "system-orbit orbit-two";

      visual.appendChild(
        orbit
      );

    }


    if (
      !$(".orbit-three", visual)
    ) {

      const orbit =
        document.createElement("div");

      orbit.className =
        "system-orbit orbit-three";

      visual.appendChild(
        orbit
      );

    }


    /* ---------------------------------------------------------
       PARTICLES
       --------------------------------------------------------- */

    if (
      !$(".system-particles", visual)
    ) {

      const particles =
        document.createElement("div");

      particles.className =
        "system-particles";


      for (
        let i = 0;
        i < 32;
        i++
      ) {

        const particle =
          document.createElement("span");


        particle.style.setProperty(
          "--particle-x",
          `${Math.random() * 100}%`
        );


        particle.style.setProperty(
          "--particle-y",
          `${Math.random() * 100}%`
        );


        particle.style.setProperty(
          "--particle-delay",
          `${Math.random() * -8}s`
        );


        particle.style.setProperty(
          "--particle-size",
          `${1 + Math.random() * 2.5}px`
        );


        particles.appendChild(
          particle
        );

      }


      visual.appendChild(
        particles
      );

    }


    /* ---------------------------------------------------------
       POINTER PARALLAX
       --------------------------------------------------------- */

    if (
      window.matchMedia(
        "(pointer:fine)"
      ).matches
    ) {

      let targetX = 0;
      let targetY = 0;

      let currentX = 0;
      let currentY = 0;


      visual.addEventListener(
        "pointermove",
        (event) => {

          const rect =
            visual.getBoundingClientRect();


          const x =
            (
              event.clientX -
              rect.left
            ) /
            rect.width -
            0.5;


          const y =
            (
              event.clientY -
              rect.top
            ) /
            rect.height -
            0.5;


          targetX =
            x * 12;

          targetY =
            y * -10;

        }
      );


      visual.addEventListener(
        "pointerleave",
        () => {

          targetX = 0;
          targetY = 0;

        }
      );


      const animate =
        () => {

          currentX +=
            (
              targetX -
              currentX
            ) * .06;


          currentY +=
            (
              targetY -
              currentY
            ) * .06;


          visual.style.transform =
            `
              rotateY(${currentX}deg)
              rotateX(${currentY}deg)
            `;


          requestAnimationFrame(
            animate
          );

        };


      animate();

    }

  }


  /* =========================================================
     THE MACHINE
     ========================================================= */

  const machine =
    $(".flow");


  if (machine) {

    const machineSteps = [
      {
        number: "01",
        title: "Discover",
        description: "Find the opportunity.",
        href: "solutions.html"
      },
      {
        number: "02",
        title: "Stack",
        description: "Choose the tools.",
        href: "stacks.html"
      },
      {
        number: "03",
        title: "Automate",
        description: "Connect the workflow.",
        href: "automation.html"
      },
      {
        number: "04",
        title: "Deliver",
        description: "Create the outcome.",
        href: "systems.html"
      },
      {
        number: "05",
        title: "Measure",
        description: "Track what works.",
        href: "money.html"
      }
    ];


    const existingSteps =
      $$(":scope > div", machine);


    existingSteps.forEach(
      (step, index) => {

        const data =
          machineSteps[index];

        if (!data) return;


        const link =
          document.createElement("a");


        link.href =
          data.href;


        link.className =
          "flow-step";


        link.innerHTML = `
          <span>
            ${data.number}
          </span>

          <strong>
            ${data.title}
          </strong>

          <small>
            ${data.description}
          </small>
        `;


        step.replaceWith(
          link
        );

      }
    );

  }


  /* =========================================================
     SCROLL REVEALS
     ========================================================= */

  const revealItems =
    $$(".card, .tool-preview, .feature-panel, .signal-panel, .flow-step");


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                !entry.isIntersecting
              ) return;


              entry.target.classList.add(
                "is-visible"
              );


              observer.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: .12
        }
      );


    revealItems.forEach(
      (item) => {

        item.classList.add(
          "reveal"
        );

        observer.observe(
          item
        );

      }
    );

  } else {

    revealItems.forEach(
      (item) => {

        item.classList.add(
          "is-visible"
        );

      }
    );

  }


  /* =========================================================
     SCROLL VISUALS
     ========================================================= */

  const sections =
    $$(".section");


  sections.forEach(
    (section, index) => {

      if (
        index === 0 ||
        section.querySelector(
          ".section-visual"
        )
      ) return;


      const sectionVisual =
        document.createElement("div");


      sectionVisual.className =
        "section-visual";


      sectionVisual.innerHTML = `
        <div class="visual-grid"></div>

        <div class="visual-orb orb-a"></div>

        <div class="visual-orb orb-b"></div>

        <div class="visual-ring ring-a"></div>

        <div class="visual-ring ring-b"></div>

        <div class="visual-core">
          <span>
            ${String(index).padStart(2, "0")}
          </span>
        </div>
      `;


      section.prepend(
        sectionVisual
      );

    }
  );


  const visualSections =
    $$(".section-visual");


  if (
    "IntersectionObserver" in window
  ) {

    const visualObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              entry.target.classList.toggle(
                "is-active",
                entry.isIntersecting
              );

            }
          );

        },
        {
          threshold: .15
        }
      );


    visualSections.forEach(
      (item) => {

        visualObserver.observe(
          item
        );

      }
    );

  }


  /* =========================================================
     CURRENT YEAR
     ========================================================= */

  const year =
    $("#current-year") ||
    $("[data-year]");


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* =========================================================
     ACTIVE NAV
     ========================================================= */

  const currentPage =
    location.pathname
      .split("/")
      .pop() ||
    "index.html";


  $$(".nav-links a").forEach(
    (link) => {

      if (
        link.getAttribute("href") ===
        currentPage
      ) {

        link.classList.add(
          "is-current"
        );

      }

    }
  );

})();
