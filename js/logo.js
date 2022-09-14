(() => {
  const menuBtnRef = document.querySelector("[data-logo-button]");
  const mobileMenuRef = document.querySelector("[data-logo]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-visible");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-visible");
  });
})();