const loginForm = document.getElementById("loginForm");
const loginButton = document.querySelector(".login-btn");
const buttonText = loginButton.querySelector("span");
const loader = document.querySelector(".loader");

const successScreen = document.getElementById("successScreen");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  message.textContent = "";

  if (username === "" || password === "") {
    message.textContent = "Please enter username and password.";
    return;
  }

  /* Loading */

  buttonText.style.display = "none";
  loader.style.display = "block";
  loginButton.disabled = true;

  /*
    Demo login delay
  */

  setTimeout(() => {

    loader.style.display = "none";
    buttonText.style.display = "block";

    loginButton.disabled = false;

    /* SUCCESS */

    successScreen.classList.add("active");

  }, 1500);

});
