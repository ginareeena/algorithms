// Problem Statement
// Our radio station is running a show in which the songs are ordered in a very specific way. The last word of the title of one song must match the first word of the title of the next song - for example, “Silent Running” could be followed by “Running to Stand Still”. No song may be played more than once.

// You will be given a list of songs. Write a function that finds the longest chain of songs that begins with the first song of the list, where the last word of each song title matches the first word of the next one.

// The longest chain is defined as the chain with the most songs in it. If there is more than one chain that is longest, break the tie by selecting the song that is alphabetically earliest for the first song that differs. (For example, prefer [“Bye Bye Bye”, “Bye Bye Baby”] to [“Bye Bye Bye”, “Bye Bye Love”], since “Bye Bye Baby” comes before “Bye Bye Love” alphabetically.)

// The first and last word of every title will be in capital case. All titles will only consist of letters and spaces. All titles will have at least one word.

// Example Input
// Consider the following list of songs:

// Every Breath You Take
// Down By the River
// River of Dreams
// Take me to the River
// Dreams
// Blues Hand Me Down
// Forever Young
// American Dreams
// All My Love
// Cantaloop
// Take it All
// Love is Forever
// Young American
// We begin with the first song, Every Breath You Take. Since this song ends with Take, the next song must start with Take as well. There are two matching songs, Take me to the River and Take it All.

// Take me to the River could be followed by River of Dreams, and Take it All could be followed by All My Love, and so on. The longest chain of songs that can be constructed is as follows:

// Every Breath You Take
// Take it All
// All My Love
// Love is Forever
// Forever Young
// Young American
// American Dreams
// Dreams
// Note that Dreams cannot follow Dreams, forming an infinite loop, as songs may only be used once.

/*
  Args:
    songs: An array of strings containing the list of songs to chain together

  Returns:
    An array of strings containing the best chain of songs. The first song of
    the return must be the first song of songs.
*/
function songChain(songs) {
  // Your code here.
  // NOTE: You may use print statements for debugging purposes, but you may
  //       need to remove them for the tests to pass.
  return [];
}

// DO NOT MODIFY BELOW THIS LINE

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
// });

// var songs = [];

// rl.on('line', (line) => {
//   line = line.trim();
//   if (line == '') return;
//   songs.push(line);
// }).on('close', () => {
//   result = songChain(songs);
//   for(song of result) {
//     console.log(song);
//   }
// });
