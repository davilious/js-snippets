//
// Composition
//

function increment(input) { return input + 1;}
function decrement(input) { return input - 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

var initialValue = 1;

var pipeline = [increment, increment, increment, double, decrement, halve];

var result = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initialValue);

console.log(result);
