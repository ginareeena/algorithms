function showList(e) {
  e.preventDefault();
  const classList = e.currentTarget.classList;
  // Check if the dropdown is currently open
  const isOpen = classList.contains("dropdown-open");
  if (isOpen) {
    classList.remove("dropdown-open");
  } else {
    classList.add("dropdown-open");
  }
}
// document.getElementById("dropdown").classList.toggle("show");
// }

document
  .querySelectorAll(".dropdown")
  .forEach((el) => el.addEventListener("click", showList));

// function handleClick(e) {

//   // Prevent <a> links from changing the page
//   e.preventDefault()
//   const classList = e.currentTarget.classList

// Listen to clicks on all drop downs
// document.querySelectorAll('.dropdown')
//   .forEach(el => el.addEventListener('click', handleClick))

//handles click

// window.onclick= function(e){
//   if(e.target.matches)
// }
