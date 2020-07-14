'use strict';
console.log('--- loading: display-all.js');

// reverse engineering!
//   the handler has no tests, study the demo to write this function

const displayHandler = (message = 'all words:', arrayToDisplay = words) => {
  debugger;
  const combineStrings = (acc, next) => {
    return  `${acc}\n${next}`;
  }
  const alertMessage = arrayToDisplay
    .reduce(combineStrings,"");
  alert(`${message}  ${alertMessage}`);
};



