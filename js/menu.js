(() => {
  const menu = document.getElementById("context-menu");
  if (!menu) return;

  function openMenu(x, y) {
    menu.classList.remove("hidden");

    const rect = menu.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 8;
    const maxY = window.innerHeight - rect.height - 8;

    menu.style.left = `${Math.min(x, maxX)}px`;
    menu.style.top = `${Math.min(y, maxY)}px`;

    requestAnimationFrame(() => {
      menu.classList.add("visible");
    });

    window.appState.setMenuOpen(true);
  }

  function closeMenu() {
    if (!window.appState.menuOpen) return;

    menu.classList.remove("visible");
    window.appState.setMenuOpen(false);

    setTimeout(() => {
      menu.classList.add("hidden");
    }, 150);
  }

  document.addEventListener(
    "click",
    (e) => {
      if (menu.contains(e.target)) return;
      if (e.target.closest("[data-no-menu]")) return;

      if (window.appState.menuOpen) {
        closeMenu();
      } else {
        openMenu(e.clientX, e.clientY);
      }
    },
    true
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
