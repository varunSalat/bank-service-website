window.addEventListener("load", () => {
  const burger = document.querySelector(".burger"),
    navbar = document.querySelector(".nav-link-container");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    navbar.classList.toggle("active-nav");
  });
});
