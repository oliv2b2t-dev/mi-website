document.addEventListener("DOMContentLoaded", () => {
  const accBtns = document.querySelectorAll(".accordion");
  accBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const submenu = btn.nextElementSibling;
      if (!submenu) return;
      submenu.classList.toggle("open", !expanded);
    });
  });
});
