//Error messages:
let nameErrorMsg = document.getElementById("nameError");
let emailErrorMsg = document.getElementById("emailError");
let passwordErrorMsg = document.getElementById("passwordError");
let confirmErrorMsg = document.getElementById("confirmError");

//this watches the form for changes and runs validate function
const form = document.getElementById("form");
form.addEventListener("change", validate);

function validate() {
  //inputValues
  let inputName = document.getElementById("name").value;
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  console.log("i am running!");
  // e.preventDefault()
  let returnVal = true;

  if (!inputName) {
    nameErrorMsg.style.display = "block";
    returnVal = false;
  } else {
    nameErrorMsg.style.display = "none";
  }

  if (!inputEmail.includes("@")) {
    emailErrorMsg.style.display = "block";
    returnVal = false;
  } else {
    emailErrorMsg.style.display = "none";
  }

  if (inputPassword.length < 6) {
    passwordErrorMsg.style.display = "block";
    returnVal = false;
  } else {
    passwordErrorMsg.style.display = "none";
  }

  if (confirmPassword !== inputPassword) {
    confirmErrorMsg.style.display = "block";
    returnVal = false;
  } else {
    confirmErrorMsg.style.display = "none";
  }
  return returnVal;
}

//Validation Function shorter version
function validateShort() {
  // e.preventDefault()
  if (!inputName) nameErrorMsg.style.display = "block";
  if (!inputEmail.includes("@")) emailErrorMsg.style.display = "block";
  if (password.length < 6) passwordErrorMsg.style.display = "block";
  if (confirmPassword !== inputPassword)
    confirmErrorMsg.style.display = "block";
}
