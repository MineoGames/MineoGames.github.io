(function () {
  var navToggle = document.querySelector(".tgo .navbar-toggle");
  var navMenu = document.querySelector(".tgo .navbar-main-collapse");

  function setNavigationOpen(open) {
    if (!navToggle || !navMenu) return;
    navMenu.classList.toggle("in", open);
    navToggle.setAttribute("aria-expanded", String(open));
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      setNavigationOpen(!navMenu.classList.contains("in"));
    });

    navMenu.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.innerWidth <= 768) {
        setNavigationOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNavigationOpen(false);
    });
  }

  var accordions = document.querySelectorAll("[data-accordion]");

  Array.prototype.forEach.call(accordions, function (accordion) {
    var triggers = accordion.querySelectorAll(".ds-accordion__trigger[aria-controls]");
    Array.prototype.forEach.call(triggers, function (trigger) {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (!panel || !accordion.contains(panel)) return;

      trigger.addEventListener("click", function () {
        var expanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      });
    });
  });
})();
