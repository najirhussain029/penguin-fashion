const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (toggleButton && navMenu) {
  const setMenuOpen = (isOpen) => {
    navMenu.classList.toggle("is-open", isOpen);
    toggleButton.setAttribute("aria-expanded", String(isOpen));
    toggleButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  toggleButton.addEventListener("click", () => {
    setMenuOpen(toggleButton.getAttribute("aria-expanded") !== "true");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

document.querySelectorAll(".image-frame img").forEach((image) => {
  const showMissingImage = () => image.closest(".image-frame").classList.add("is-missing");

  image.addEventListener("error", showMissingImage);
  if (image.complete && image.naturalWidth === 0) showMissingImage();
});