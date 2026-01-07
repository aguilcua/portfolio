window.appState = {
  menuOpen: false,
  activeSection: "home",

  setMenuOpen(value) {
    this.menuOpen = value;
  },

  setActiveSection(sectionId) {
    this.activeSection = sectionId;
  },
};
