'use strict';
console.log('--- loading: exists.js');

const existsHandler = () => {
  debugger;
  const userInput = prompt('find if a word exists:');
  if (userInput === null) {
    return;
  }

  const equalsUserInput = words.find((entry) => 
  entry === userInput
);

  const itExists = words.includes(equalsUserInput);
  if (itExists) {
    alert(`"${userInput}" exists`);
  } else {
    alert(`"${userInput}" does not exist`);
  }
};
