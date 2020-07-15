"use strict";
console.log("--- loading: replace.js");

const replaceHandler = () => {
  debugger;
  const userInput1 = prompt("enter the word to replace:");
  if (userInput1 === null) {
    return;
  }
  /*
  const entryIsUserInput = (entry) => {
    return _;
  };
*/
  const inputExists = words.includes(userInput1);
  console.log(inputExists);
  if (!inputExists) {
    alert(`"${userInput1}" does not exist`);
    return;
  }

  const userInput2 = prompt(`enter a word to replace "${userInput1}":`);
  if (userInput2 === null) {
    return;
  }

  const replaceWithInput2 = (entry) =>
    entry === userInput1 ? userInput2 : entry;

  words = words.map(replaceWithInput2);

  displayHandler(`"${userInput1}" has been replaced by "${userInput2}":`);
};
