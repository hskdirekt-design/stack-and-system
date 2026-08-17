(() => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  const mobileToggle = $(".mobile-toggle");
  const navLinks = $(".nav-links");

  if (mobileToggle && navLinks) {

    mobileToggle.addEventListener("click", () => {

      const open =
        navLinks.classList.toggle("is-open");

      mobileToggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    });


    $$(".nav-links a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("is-open");

        mobileToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =========================================================
     3D SYSTEM
     ========================================================= */

  const visual = $(".hero-visual");

  if (visual) {

    /*
     * The original HTML uses:
     *
     * .node
     * .node-1
     * .node-2
     *
     * while the original CSS expected:
     *
     * .system-node
     * .node-idea
     * .node-ai
     *
     * Normalise the existing HTML instead of changing index.html.
     */

    const nodeMap = [
      {
        selector: ".node-1",
        label: "01",
        title: "IDEA",
        description: "Find an opportunity",
        href: "solutions.html"
      },
      {
        selector: ".node-2",
        label: "02",
        title: "AI",
        description: "Choose the right tools",
        href: "ai.html"
      },
      {
        selector: ".node-3",
        label: "03",
        title: "AUTOMATION",
        description: "Connect the workflow",
        href: "automation.html"
      },
      {
        selector: ".node-4",
        label: "04",
        title: "PRODUCT",
        description: "Build something useful",
        href: "products.html"
      },
      {
        selector: ".node-5",
        label: "05",
        title: "OUTCOME",
        description: "Measure the result",
        href: "money.html"
      }
    ];


    nodeMap.forEach((item, index) => {

      const node = $(item.selector, visual);

      if (!node) return;


      node.classList.add(
        "system-node",
        `system-node-${index + 1}`
      );


      /*
       * Turn every 3D node into a real hyperlink.
       */

      let link;

      if (node.tagName.toLowerCase() === "a") {

        link = node;

      } else {

        link = document.createElement("a");

        link.href = item.href;

        link.className =
          node.className;

        link.innerHTML =
          node.innerHTML;

        node.replaceWith(link);

      }


      link.setAttribute(
        "aria-label",
        `${item.label} ${item.title}: ${item.description}`
      );


      link.innerHTML = `
        <span class="node-number">
          ${item.label}
        </span>

        <strong>
          ${item.title}
        </strong>

        <small>
          ${item.description}
        </small>
      `;

    });


    /*
     * Remove the second floating brand identity.
     * Turn the centre into a system engine instead.
     */

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

      core.setAttribute(
        "aria-label",
        "Stack and System AI system engine"
      );

    }


    /*
     * Add additional orbital layers.
     * This is generated through JavaScript so index.html
     * does not need to change.
     */

    if (!$(".system-glow", visual)) {

      const glow =
        document.createElement("div");

      glow.className =
        "system-glow";

      visual.prepend(glow);

    }


    if (!$(".orbit-two", visual)) {

      const orbit =
        document.createElement("div");

      orbit.className =
        "system-orbit orbit-two";

      visual.appendChild(orbit);

    }


    if (!$(".orbit-three", visual)) {

      const orbit =
        document.createElement("div");

      orbit.className =
        "system-orbit orbit-three";

      visual.appendChild(orbit);

    }


    /*
     * Add subtle particles.
     */

    if (!$(".system-particles", visual)) {

      const particles =
        document.createElement("div");

      particles.className =
        "system-particles";

      for (let i = 0; i < 28; i++) {

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


    /*
     * Mouse / pointer depth.
     */

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
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          targetX = x * 12;
          targetY = y * -10;

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
            (targetX - currentX) *
            0.06;

          currentY +=
            (targetY - currentY) *
            0.06;


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
     SCROLL REVEAL
     ========================================================= */

  const revealItems =
    $$(
      ".card, .tool-preview, .feature-panel, .signal-panel, .flow a"
    );


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
          threshold: 0.12
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
     SCROLL VISUAL SYSTEM
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


      const visual =
        document.createElement("div");

      visual.className =
        "section-visual";


      visual.innerHTML = `
        <div class="visual-grid"></div>

        <div class="visual-orb orb-a"></div>
        <div class="visual-orb orb-b"></div>

        <div class="visual-ring ring-a"></div>
        <div class="visual-ring ring-b"></div>

        <div class="visual-core">
          <span>${String(index).padStart(2, "0")}</span>
        </div>
      `;


      section.prepend(
        visual
      );

    }
  );


  /*
   * Highlight visual layers as they enter the viewport.
   */

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
          threshold: 0.15
        }
      );


    visualSections.forEach(
      (visual) => {

        visualObserver.observe(
          visual
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
     NEWSLETTER
     ========================================================= */

  const newsletterForms =
    $$("form[data-newsletter]");


  newsletterForms.forEach(
    (form) => {

      form.addEventListener(
        "submit",
        (event) => {

          event.preventDefault();


          const email =
            $("input[type='email']", form);

          const message =
            $(".form-message", form);


          if (
            !email ||
            !message
          ) return;


          const value =
            email.value.trim();


          if (!value) {

            message.textContent =
              "Enter your email address.";

            return;

          }


          if (
            !email.checkValidity()
          ) {

            message.textContent =
              "Enter a valid email address.";

            return;

          }


          message.textContent =
            "You're ready to join The Signal.";

          form.classList.add(
            "submitted"
          );

          email.value = "";

        }
      );

    }
  );


  /* =========================================================
     EXTERNAL LINKS
     ========================================================= */

  $$(
    "a[data-external]"
  ).forEach(
    (link) => {

      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    }
  );


  /* =========================================================
     ACTIVE NAVIGATION
     ========================================================= */

  const currentPage =
    location.pathname
      .split("/")
      .pop() ||
    "index.html";


  $$(".nav-links a").forEach(
    (link) => {

      const href =
        link.getAttribute("href");


      if (
        href === currentPage
      ) {

        link.classList.add(
          "is-current"
        );

      }

    }
  );

})();
