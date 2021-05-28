function showList(e) {
  e.preventDefault();
  console.log("e.currentTarget", e.currentTarget);
  const classList = e.currentTarget.classList;
  // Check if the dropdown is currently open
  const isOpen = classList.contains("dropdown-open");
  if (isOpen) {
    classList.remove("dropdown-open");
  } else {
    classList.add("dropdown-open");
  }
}

document
  .querySelectorAll(".dropdown")
  .forEach((el) => el.addEventListener("click", showList));

window.onclick = function (e) {
  if (!e.target.matches(".dropBtn")) {
    let dropdowns = document.getElementsByClassName("dropdown");

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      console.log("openDropDown", openDropdown);
      console.log("openDropdown.classList", openDropdown.classList);
      if (openDropdown.classList.contains("dropdown-open")) {
        openDropdown.classList.remove("dropdown-open");
      }
    }
  }
};
