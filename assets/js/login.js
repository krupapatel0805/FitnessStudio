const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const createAccount = document.getElementById("create-account");
const signupForm = document.getElementById("signup-form");
const yesBtn = document.getElementById("yes-button");
const noBtn = document.getElementById("no-button");
const membershipCheckbox = document.getElementById("membership-checkbox");

createAccount.addEventListener("click", (e) => {
	e.preventDefault();
	loginForm.style.display = "none";
	signupForm.style.display = "block";
});