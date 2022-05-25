const mobileBarsButton = document.querySelector(
  ".mobile-header.mobile-header-wrapper i"
);
const mobileNavMenuWrapper = document.querySelector(
  ".mobile-header-nav__wrapper"
);
const mobileNavMenuExitButton = document.querySelector(
  ".mobile-header-nav__wrapper i"
);

mobileBarsButton.addEventListener("click", function (e) {
  mobileNavMenuWrapper.style.display = "flex";
});

mobileNavMenuExitButton.addEventListener("click", function (e) {
  mobileNavMenuWrapper.style.display = "none";
});