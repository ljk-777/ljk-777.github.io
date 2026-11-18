(() => {
  let theme = "light";
  try {
    theme = localStorage.getItem("marine-homepage-theme") === "dark" ? "dark" : "light";
  } catch { /* Keep the default when storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191c22" : "#ffffff";
})();
