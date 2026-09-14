// =========================================================
// Arwa Johar — Freelance Web Developer
// Shared site behaviour
// =========================================================

(function () {
  "use strict";

  // ---- Config: update these two lines to change your number/message everywhere ----
  var WHATSAPP_NUMBER = "919372383397"; // country code + number, no + or spaces
  var WHATSAPP_MESSAGE = "Hi Arwa, I'm interested in getting a website. I'd like to discuss my requirements.";

  var waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

  ["hero-whatsapp", "cta-whatsapp", "float-whatsapp"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", waLink);
  });

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Hero browser mockup: cycles through mini "website" scenes ----
  var mockStage = document.getElementById("mockStage");
  if (mockStage) {
    var scenes = [
      { fg: "#F5C453", bg: "#1C0A0C" }, // restaurant
      { fg: "#7A2E2E", bg: "#F4E3DE" }, // salon
      { fg: "#ffffff", bg: "#0B0B0B" }, // portfolio
      { fg: "#8FB6FF", bg: "#0F2340" }  // business
    ];
    var current = 0;

    function buildScene(colors) {
      var scene = document.createElement("div");
      scene.className = "mock-scene";
      scene.style.background = colors.bg;
      scene.style.color = colors.fg;
      scene.innerHTML =
        '<div class="m-nav"><span class="m-dot" style="background:' + colors.fg + '"></span>' +
        '<span class="m-links"><span></span><span></span><span></span></span></div>' +
        '<div class="m-hero">' +
        '<div class="m-bar w1" style="background:' + colors.fg + '"></div>' +
        '<div class="m-bar w2" style="background:' + colors.fg + '"></div>' +
        '<div class="m-cta" style="background:' + colors.fg + '"></div>' +
        "</div>" +
        '<div class="m-cards">' +
        '<div class="m-card" style="background:' + colors.fg + '33"></div>' +
        '<div class="m-card" style="background:' + colors.fg + '33"></div>' +
        '<div class="m-card" style="background:' + colors.fg + '33"></div>' +
        "</div>";
      return scene;
    }

    scenes.forEach(function (colors, i) {
      var el = buildScene(colors);
      if (i === 0) el.classList.add("is-active");
      mockStage.appendChild(el);
    });

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      setInterval(function () {
        var nodes = mockStage.querySelectorAll(".mock-scene");
        nodes[current].classList.remove("is-active");
        current = (current + 1) % nodes.length;
        nodes[current].classList.add("is-active");
      }, 3200);
    }
  }
})();
