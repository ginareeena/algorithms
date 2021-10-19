// using async and await get the value of resolve of this function

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
}

//FIRST WAY

// chaining .then passing it ->
// an anonymous function that takes the results as a parameter
// and console logs it

// resolveAfter3Seconds().then((data)=>{
//   console.log(data)
// })

//SECOND WAY

//write an async function that awaits the result of the function call
// saves it in a variable
// then logs that

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAsyncData();
