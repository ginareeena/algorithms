// String Challenge Medium
// Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

// If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.
// Examples
// Input: "<div><div><b></b></div></p>"
// Output: div
// Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
// Output: i

function StringChallenge(str) {
  let tags = getTags(str);
  // console.log("tags", tags)

  let left = 0;
  let right = 1;

  while (right < tags.length - 1) {
    let firstTag = tags[left];
    let nextTag = tags[right];

    console.log(
      `str: ${str}, tagA: ${firstTag}, tagB:${nextTag}, left: ${left}, right: ${right}`
    );

    if (tagsClosed(firstTag, nextTag)) {
      if (right === tags.length - 1) {
        right = 1;
        left = 0;
      } else {
        left += 2;
        right += 2;
      }
    } else {
      if (right === tags.length - 1) {
        return firstTag;
      }
      right++;
    }
  }

  return true;
}

//HELPER FUNCTIONS BELOW:

// gets tags from a string
function getTags(str) {
  let tags = [];
  let newWord = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "<" || char !== ">") {
      newWord += char;
    }
    if (char === ">") {
      newWord += char;
      tags.push(newWord);
      newWord = "";
    }
  }
  return tags;
}

// compares if two tags are a match
function tagsClosed(tagA, tagB) {
  // console.log("inside tagsClosed: tagA, tagB", tagA,tagB)
  if (tagA.includes("/")) {
    return false;
  } else if (!tagB.includes("/")) {
    return false;
  } else {
    if (tagA.slice(1, -1) === tagB.slice(2, -1)) {
      return true;
    }
  }
}

// this issue with this presently is that it just looks for a
// closing tag without keeping track of whether a previous tag already matched it

// keep this function call here
console.log(StringChallenge(readline()));
