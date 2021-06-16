let dropDownContent = document.getElementsByClassName("dropdown-content")[0];

function dropdownClick() {
  dropDownContent.style.display = "block";
  // console.log("you clicked me!");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    dropDownContent.style.display = "none";
  }
};
