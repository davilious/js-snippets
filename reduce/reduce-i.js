// REDUCE
// ------
// 1) always pass an intial value for the reducer
// 2) always return the accumulator
//

var votes = [
  "react",
  "react",
  "angular",
  "angular",
  "react",
  "ember",
  "backbone",
  "vanilla"
];

var initialValue = {};

//
// "obj" here is whatever obj return the last time was run
// "vote" each of the items in array
//
var reducer = function(obj, vote) {
  if (obj[vote] === undefined) {
    obj[vote] = 1;
  } else {
    obj[vote] = obj[vote] + 1;
  }
  // important, return the accumulator
  return obj;
};

var result = votes.reduce(reducer, initialValue);

console.log(result);
