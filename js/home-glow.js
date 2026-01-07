(() => {
  const home = document.getElementById("home");
  if (!home) return;

  let rafId = null;

  document.addEventListener("mousemove", (e) => {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      home.style.setProperty("--glow-x", `${x}%`);
      home.style.setProperty("--glow-y", `${y}%`);

      rafId = null;
    });
  });
})();
