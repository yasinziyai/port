function toggleTheme() {
  const body = document.documentElement;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply theme
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Animate theme change
  animateThemeChange(newTheme);
}

function animateThemeChange(theme) {
  const elements = document.querySelectorAll(".theme-animate");
  elements.forEach((element) => {
    element.classList.add("theme-changing");
    setTimeout(() => {
      element.classList.remove("theme-changing");
    }, 300);
  });
}

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        e.matches ? "dark" : "light",
      );
    }
  });
