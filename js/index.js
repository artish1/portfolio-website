window.addEventListener("load", () => {
  let hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    console.log("Clicked hamburger icon");
    hamburger.classList.toggle("change");
  });

  console.log("Loaded?");
});
