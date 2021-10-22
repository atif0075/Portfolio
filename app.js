let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav");
burger.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("top-16");
    nav.classList.add("bottom-0");
  } else {
    nav.classList.add("hidden");
  }
});
