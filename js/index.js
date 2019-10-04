window.addEventListener("load", () => {
  let hamburger = document.querySelector(".hamburger");
  let nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");

    nav.classList.toggle("nav-open");
  });
});
