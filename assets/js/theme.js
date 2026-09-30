(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-theme-value]");

  // Dark is the default, so it's stored as "no preference"
  function apply(value) {
    if (value === "dark") {
      delete root.dataset.theme;
      localStorage.removeItem("theme");
    } else {
      root.dataset.theme = value;
      localStorage.setItem("theme", value);
    }
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.themeValue === value);
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.themeValue); });
  });
  apply(localStorage.getItem("theme") || "dark");
})();
