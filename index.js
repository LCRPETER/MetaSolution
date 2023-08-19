const navbar = document.querySelector("nav");

const login = document.querySelector(".contenair-login");
const signIn = document.querySelector(".contenair-sign-in");
const Click = document.querySelectorAll(
  "nav > ul > .btn-login, nav > div > form > p > span, nav > div > .login-remove"
);
let lastscroll = 0;
let nb = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY <= lastscroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-100px";
  }
  lastscroll = window.scrollY;
});
for (let i = 0; i < Click.length; i++) {
  Click[i].addEventListener("click", () => {
    switch (Click[i]) {
      case Click[nb]:
        login.style.display = "block";
        break;
      case Click[nb + 2]:
        login.style.display = "none";
        signIn.style.display = "block";
        break;
      case Click[nb + 4]:
        signIn.style.display = "none";
        login.style.display = "block";
        break;
      case Click[nb + 1]:
        login.style.display = "none";
        break;
      case Click[nb + 3]:
        signIn.style.display = "none";
        break;
      default:
        null;
        break;
    }
  });
}
