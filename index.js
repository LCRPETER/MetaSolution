const navbar = document.querySelector("nav");

let lastscroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 6) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = 0;
  }
  lastscroll = window.scrollY;
});
