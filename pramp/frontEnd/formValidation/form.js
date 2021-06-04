function validateForm() {
  let name = document.forms["formContainer"]["name"].value;
  let email = document.forms["formContainer"]["email"].value;
  let password = document.forms["formContainer"]["email"].value;
  let confirm = document.forms["formContainer"]["confirm"].value;

  if (name == "") {
    alert("Name is required");
  } else if (email == "" || !email.includes("@")) {
    alert("Email is invalid");
  } else if (password == "" || password.length < 6) {
    alert("Password must be 6 characters or more");
  } else if (password !== confirm) {
    alert("Passwords don't match");
  }
  console.log(password, confirm);

  return true;
}
