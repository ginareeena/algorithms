// getFishAndChips = () => {
//   fetch(this.fishApiUrl) // Request fish
//     .then((fishRes) => {
//       fishRes.json().then((fish) => {
//         this.fish = fish;

//         const fishIds = fish.map((fish) => fish.id);

//         fetch(
//           // Request chips using fish ids
//           this.chipsApiUrl,
//           {
//             method: "POST",
//             body: JSON.stringify({fishIds}),
//           }
//         ).then((chipsRes) => {
//           chipsRes.json().then((chips) => {
//             this.chips = chips;
//           });
//         });
//       });
//     });
// };

//The first way to remove the nesting of these fetch calls is to use what is known as promise chaining. Promise chaining can be achieved by simply returning another promise from within a call to Promise.then. The following example shows how to do this:

// We have to get chips after we get fish...
// getFishAndChips = () => {
//   fetch(this.fishApiUrl) // Request fish
//     .then((response) => response.json())
//     .then((fish) => {
//       this.fish = fish;

//       const fishIds = fish.map((fish) => fish.id);

//       return fetch(
//         // Request chips using fish ids
//         this.chipsApiUrl,
//         {
//           method: "POST",
//           body: JSON.stringify({fishIds}),
//         }
//       );
//     })
//     .then((response) => response.json())
//     .then((chips) => {
//       this.chips = chips;
//     });
// };


const getFishAndChips = async (fishApiUrl) => {
  const fish = await fetch(fishApiUrl).then(response => response.json());

  const fishIds = fish.map(fish => fish.id),
  chipReqOpts = { method: 'POST', body: JSON.stringify({ fishIds }) };

  const chips = await fetch(chipsApiUrl, chipReqOpts).then(response => response.json());
}