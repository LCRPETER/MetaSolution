const navbar = document.querySelector("nav");
const btnLogin = document.getElementById("login-btn");
const login = document.querySelector(".contenair-login");
const signIn = document.querySelector(".contenair-sign-in");
const register = document.querySelector(".register");
const connect = document.querySelector(".register");
const span = document.querySelector("span");
let lastscroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY <= lastscroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-100px";
  }
  lastscroll = window.scrollY;
});
btnLogin.addEventListener("click", () => {
  login.style.display = "block";
});
span.addEventListener("click", () => {
  login.remove();
});
register.addEventListener("click", () => {
  login.remove();
  signIn.style.display = "block";
});
// connect.addEventListener("click", () => {
//   login.style.display = "block";
//   signIn.remove();
// });
