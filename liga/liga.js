// liga/liga.js
document.addEventListener("DOMContentLoaded", function () {
  const acc = document.querySelectorAll(".accordion");

  acc.forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));

      const submenu = button.nextElementSibling;
      if (!submenu) return;

      if (!expanded) {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    });
  });

  // opcional: cerrar otros acordeones al abrir uno (comportamiento "solo uno abierto")
  /*
  acc.forEach(button => {
    button.addEventListener("click", () => {
      acc.forEach(b => {
        if (b !== button) {
          b.setAttribute("aria-expanded", "false");
          const s = b.nextElementSibling;
          if (s) s.style.display = "none";
        }
      });
    });
  });
  */
});
