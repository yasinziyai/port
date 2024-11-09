// در js/theme-switcher.js
function toggleTheme() {
  const body = document.documentElement;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // تغییر تم
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // به‌روزرسانی متن دکمه
  updateThemeButtonText(newTheme);
}

function updateThemeButtonText(theme) {
  const faText = document.querySelector(".theme-toggle .fa");
  const enText = document.querySelector(".theme-toggle .en");

  if (theme === "dark") {
    faText.textContent = "تم تیره";
    enText.textContent = "Dark Theme";
  } else {
    faText.textContent = "تم روشن";
    enText.textContent = "Light Theme";
  }
}

// اجرا در هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", () => {
  // بررسی تم ذخیره شده
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonText(savedTheme);

  // بررسی تم سیستم در صورت نبود تم ذخیره شده
  if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      updateThemeButtonText("dark");
    }
  }
});
