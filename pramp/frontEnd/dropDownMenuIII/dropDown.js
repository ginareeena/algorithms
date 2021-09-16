let dropdownList = document.getElementById("dropdownList");
let clickOff = document.getElementById("clickOff");

function onDropdownClick() {
  if (dropdownList.style.display === "none") {
    dropdownList.style.display = "block";
    clickOff.style.display = "block";
  } else {
    dropdownList.style.display = "none";
  }
}

function onClickAway() {
  dropdownList.style.display = "none";
  clickOff.style.display = "none";
}
