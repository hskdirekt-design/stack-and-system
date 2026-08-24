/*
 * Stack & System — A1 Global UX / Navigation
 *
 * Applies only to the MAIN site architecture.
 * The Tools / company ecosystem remains separate.
 *
 * Handles:
 * - Mobile navigation
 * - Learn / Build dropdowns
 * - Active page state
 * - Escape-to-close
 * - Outside-click close
 * - Back button support
 * - Back-to-top
 * - Current year
 * - Accessible navigation state
 */

(() => {
  "use strict";

  const isToolsEcosystem = () => {
    const path = window.location.pathname.toLowerCase();

    return (
      path.endsWith("/tools.html") ||
      path.endsWith("/tools-directory.html") ||
      document.body?.dataset?.ecosystem === "tools"
    );
  };

  /*
   * Do not interfere with the dedicated Tools/company architecture.
   */
  if (isToolsEcosystem()) {
    return;
  }

  const nav = document.querySelector("#primary-navigation");
  const mobileToggle = document.querySelector(".mobile-toggle");

  /*
   * ---------------------------------------------------------
   * MOBILE NAVIGATION
   * ---------------------------------------------------------
   */

  const closeMobileNav = () => {
    if (!nav || !mobileToggle) return;

    nav.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
  };

  const openMobileNav = () => {
    if (!nav || !mobileToggle) return;

    nav.classList.add("is-open");
    mobileToggle.setAttribute("aria-expanded", "true");
  };

  if (nav && mobileToggle) {
    mobileToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const expanded =
        mobileToggle.getAttribute("aria-expanded") === "true";

      expanded ? closeMobileNav() : openMobileNav();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });
  }

  /*
   * ---------------------------------------------------------
   * NAV DROPDOWNS
   * ---------------------------------------------------------
   */

  const navGroups = document.querySelectorAll(".nav-group");

  const closeAllDropdowns = (except = null) => {
    navGroups.forEach((group) => {
      if (group === except) return;

      group.classList.remove("is-open");

      const toggle = group.querySelector(".nav-group-toggle");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  };

  navGroups.forEach((group) => {
    const toggle = group.querySelector(".nav-group-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = group.classList.contains("is-open");

      closeAllDropdowns(group);

      group.classList.toggle("is-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /*
   * Close menus when clicking elsewhere.
   */
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    if (
      !target.closest(".nav-group") &&
      !target.closest(".mobile-toggle")
    ) {
      closeAllDropdowns();
      closeMobileNav();
    }
  });

  /*
   * Escape closes open navigation.
   */
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    closeAllDropdowns();
    closeMobileNav();

    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  });

  /*
   * ---------------------------------------------------------
   * ACTIVE PAGE
   * ---------------------------------------------------------
   */

  const currentFile = (() => {
    const pathname = window.location.pathname;

    const filename = pathname.split("/").pop();

    return filename || "index.html";
  })();

  const normaliseHref = (href) => {
    if (!href) return "";

    return href
      .split("#")[0]
      .split("?")[0]
      .replace(/^.\//, "")
      .toLowerCase();
  };

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = normaliseHref(link.getAttribute("href"));

    if (!href || href.startsWith("http")) return;

    if (href === currentFile.toLowerCase()) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active");

      const parentGroup = link.closest(".nav-group");

      if (parentGroup) {
        parentGroup.classList.add("has-current");
      }
    }
  });

  /*
   * ---------------------------------------------------------
   * BACK BUTTON
   * ---------------------------------------------------------
   *
   * Only enhances an existing back control.
   * It does not create random navigation destinations.
   */

  document.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      const fallback = button.getAttribute("data-back-fallback");

      if (fallback) {
        window.location.href = fallback;
      }
    });
  });

  /*
   * Existing .back-link elements remain normal links.
   * This means visitors are never dependent on browser history.
   */

  /*
   * ---------------------------------------------------------
   * BACK TO TOP
   * ---------------------------------------------------------
   */

  const createBackToTop = () => {
    if (document.querySelector("[data-back-to-top]")) {
      return document.querySelector("[data-back-to-top]");
    }

    const button = document.createElement("button");

    button.type = "button";
    button.className = "back-to-top";
    button.setAttribute("data-back-to-top", "");
    button.setAttribute("aria-label", "Back to top");
    button.innerHTML = "↑";

    document.body.appendChild(button);

    return button;
  };

  const backToTop = createBackToTop();

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle(
        "is-visible",
        window.scrollY > 500
      );
    };

    window.addEventListener(
      "scroll",
      updateBackToTop,
      { passive: true }
    );

    updateBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior:
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth"
      });
    });
  }

  /*
   * ---------------------------------------------------------
   * CURRENT YEAR
   * ---------------------------------------------------------
   */

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  /*
   * ---------------------------------------------------------
   * MOBILE BREAKPOINT SAFETY
   * ---------------------------------------------------------
   *
   * If the viewport becomes desktop-sized after the mobile
   * menu was opened, clear the mobile state.
   */

  const mobileMedia = window.matchMedia("(min-width: 901px)");

  const handleViewportChange = (event) => {
    if (event.matches) {
      closeMobileNav();
      closeAllDropdowns();
    }
  };

  if (typeof mobileMedia.addEventListener === "function") {
    mobileMedia.addEventListener(
      "change",
      handleViewportChange
    );
  } else {
    mobileMedia.addListener(handleViewportChange);
  }
})();