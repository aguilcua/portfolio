(() => {
  const menu = document.getElementById("context-menu");
  const menuItems = menu.querySelectorAll("li[data-target], li[data-external]");
  const sections = document.querySelectorAll(".content-section");

  if (!menu || !menuItems.length) return;

  function hideAllSections() {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  }

  function showSection(id) {
    const target = document.getElementById(id);
    const home = document.getElementById("home");
    if (!target) return;

    if (home && !home.classList.contains("hidden")) {
      home.classList.add("hidden");
    }

    hideAllSections();

    void target.offsetWidth;

    target.classList.add("active");

    window.appState.setActiveSection(id);
  }

  function closeMenu() {
    menu.classList.remove("visible");
    window.appState.setMenuOpen(false);

    setTimeout(() => {
      menu.classList.add("hidden");
    }, 150);
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const targetSection = item.dataset.target;
      const externalLink = item.dataset.external;

      if (externalLink) {
        window.open(externalLink, "_blank", "noopener");
        closeMenu();
        return;
      }

      if (targetSection) {
        showSection(targetSection);
        closeMenu();
      }
    });
  });
})();
