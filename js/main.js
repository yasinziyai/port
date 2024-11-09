// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize app
  checkSavedPreferences();
  initializeAnimations();
  setupEventListeners();
});

function checkSavedPreferences() {
  // Check saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Check saved language
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    document.body.setAttribute("data-lang", savedLang);
    document.documentElement.style.direction =
      savedLang === "fa" ? "rtl" : "ltr";
  }
}

function initializeAnimations() {
  // Add animation classes to elements
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
}

function setupEventListeners() {
  // Add scroll animations
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animated");
      }
    });
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
