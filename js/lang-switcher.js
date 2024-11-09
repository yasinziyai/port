function toggleLang() {
  const body = document.body;
  const currentLang = body.getAttribute("data-lang");
  const newLang = currentLang === "fa" ? "en" : "fa";

  // تغییر زبان
  body.setAttribute("data-lang", newLang);
  localStorage.setItem("lang", newLang);

  // تغییر direction صفحه
  document.documentElement.style.direction = newLang === "fa" ? "rtl" : "ltr";

  // تغییر متن دکمه زبان
  updateLanguageButton(newLang);
}

function updateLanguageButton(lang) {
  const langButton = document.querySelector(".lang-toggle");
  langButton.textContent = lang === "fa" ? "EN" : "فا";
}

// تنظیم اولیه زبان در هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fa";
  document.body.setAttribute("data-lang", savedLang);
  document.documentElement.style.direction = savedLang === "fa" ? "rtl" : "ltr";
  updateLanguageButton(savedLang);
});
