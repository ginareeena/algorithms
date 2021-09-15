
//Error messages:
let nameErrorMsg= document.getElementById("nameError")
let emailErrorMsg= document.getElementById("emailError")
let passwordErrorMsg= document.getElementById("passwordError")
let confirmErrorMsg= document.getElementById("confirmError")

//Input Values:
let inputName= document.getElementById("name")
let inputEmail= document.getElementById("email")
let inputPassword= document.getElementById("password")
let confirmPassword= document.getElementById("confirmPassword")

//Validation Function
function validateShort(e){
e.preventDefault()
if (!inputName) nameErrorMsg.style.display= "block"
if (!inputEmail.includes("@")) emailErrorMsg.style.display= "block"
if (password.length < 6) passwordErrorMsg.style.display= "block"
if (confirmPassword !== inputPassword) confirmErrorMsg.style.display= "block"  
}

//wrote this out to test the true false return

function validate(e){
e.preventDefault()
if (!inputName) {
    nameErrorMsg.style.display= "block"
    return false;
   }
if (!inputEmail.includes("@")) {
   emailErrorMsg.style.display= "block"
   return false;
}
if (inputPassword.length < 6) {
    passwordErrorMsg.style.display= "block"
   return false;
}
if (confirmPassword !== inputPassword) {
   confirmErrorMsg.style.display= "block" 
  return false;
}
  return true;
}

