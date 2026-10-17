/* ============================================================
   main.js: mobile nav, scroll reveal
   No frameworks. Defer-loaded.
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // ---- Email de-obfuscation ----
    // Builds mailto links client-side from data-user/data-domain so the
    // address never sits as plain text in the static HTML for scrapers.
    document.querySelectorAll("[data-user][data-domain]").forEach(function (el) {
      const address = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
      if (el.tagName === "A") {
        el.href = "mailto:" + address;
      }
      if (el.hasAttribute("data-fill-text")) {
        el.textContent = address;
      }
    });

    // ---- Mobile nav drawer ----
    const navToggle = document.querySelector("[data-nav-toggle]");
    const drawer = document.querySelector("[data-nav-drawer]");
    if (navToggle && drawer) {
      navToggle.addEventListener("click", function () {
        const open = drawer.getAttribute("data-open") === "true";
        drawer.setAttribute("data-open", String(!open));
        navToggle.setAttribute("aria-expanded", String(!open));
        document.body.style.overflow = !open ? "hidden" : "";
      });
      drawer.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          drawer.setAttribute("data-open", "false");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }

    // ---- Scroll reveal (IntersectionObserver) ----
    const reveals = document.querySelectorAll(".reveal");
    if (reveals.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // ---- Copy email helper ----
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const text = btn.getAttribute("data-copy");
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
          const orig = btn.textContent;
          btn.textContent = "Copied ✓";
          setTimeout(function () { btn.textContent = orig; }, 1600);
        });
      });
    });
  });
})();
