let confirmation= document.getElementById("confirmDelete")

const onClick = () => {
  console.log("hi!")
  confirmation.style.display= "block"
}

const onConfirmDelete = () => {
confirmation.style.display= "none"
  console.log("you deleted!")
}


const onCancel = () => {
confirmation.style.display= "none"
  console.log("you canceled delete!")
}