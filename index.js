const navbar = document.querySelector("nav");
const user = document.querySelectorAll(".contenair-User");
const Click = document.querySelectorAll(".btn-login, p > span, .login-remove");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type = "password"]'
);

let pseudo, email, password, confirmPass;
let lastscroll = 0;
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
      case Click[0]:
        user[0].style.display = "block";
        break;
      case Click[1]:
        user[0].style.display = "none";
        break;
      case Click[2]:
        user[0].style.display = "none";
        user[1].style.display = "block";
        break;
      case Click[3]:
        user[1].style.display = "none";
        break;
      case Click[4]:
        user[1].style.display = "none";
        user[0].style.display = "block";
        break;
      default:
        null;
        break;
    }
  });
}
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = "";

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudoReg":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "passwordReg":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        break;
    }
  });
});
