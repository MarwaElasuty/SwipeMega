const hamburger = document.querySelector(".hamburger-menu");

const mobileNav = document.querySelector(".mobileNav");


hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("openDrawer");
  });