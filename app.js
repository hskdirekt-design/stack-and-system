(() => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  /* ------------------------------
     MOBILE NAVIGATION
  ------------------------------ */

  const mobileToggle = $(".mobile-toggle");
  const navLinks = $(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");

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

  /* ------------------------------
     3D SYSTEM PARALLAX
  ------------------------------ */

  const visual = $(".hero-visual");

  if (visual && window.matchMedia("(pointer:fine)").matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    visual.addEventListener("pointermove", (event) => {
      const rect = visual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      targetX = x * 16;
      targetY = y * -16;
    });

    visual.addEventListener("pointerleave", () => {
      targetX = 0;
      targetY = 0;
    });

    const animate = () => {
      currentX +=
        (targetX - currentX) * 0.07;

      currentY +=
        (targetY - currentY) * 0.07;

      visual.style.transform =
        `rotateY(${currentX}deg) rotateX(${currentY}deg)`;

      requestAnimationFrame(animate);
    };

    animate();
  }

  /* ------------------------------
     SCROLL REVEAL
  ------------------------------ */

  const revealItems = $$(
    ".card, .tool-preview, .feature-panel, .signal-panel, .flow a"
  );

  if ("IntersectionObserver" in window) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );
          });
        },
        {
          threshold: 0.12
        }
      );

    revealItems.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  }

  /* ------------------------------
     CURRENT YEAR
  ------------------------------ */

  const year = $("#current-year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

  /* ------------------------------
     NEWSLETTER FORM
  ------------------------------ */

  const newsletterForms =
    $$("form[data-newsletter]");

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email =
        $("input[type='email']", form);

      const message =
        $(".form-message", form);

      if (!email || !message) return;

      const value =
        email.value.trim();

      if (!value) {
        message.textContent =
          "Enter your email address.";

        return;
      }

      if (!email.checkValidity()) {
        message.textContent =
          "Enter a valid email address.";

        return;
      }

      /*
       * The front-end is intentionally ready
       * for a real email provider.
       *
       * We do NOT pretend the email was stored
       * until a real backend/provider is connected.
       */

      message.textContent =
        "You're ready to join The Signal.";

      form.classList.add(
        "submitted"
      );

      email.value = "";
    });
  });

  /* ------------------------------
     EXTERNAL LINKS
  ------------------------------ */

  $$("a[data-external]").forEach((link) => {
    link.setAttribute(
      "target",
      "_blank"
    );

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

})();
