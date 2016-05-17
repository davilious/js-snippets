//
// Using the others parameters of reduce() we can handle situation in the same function
// to keep consitency and to use functional approach when possible
//
var reducer = function(accumulator, value, index, array) {
  var sum = accumulator + value;
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return  accumulator + value;
}

var data = [1, 2, 3, 4, 5, 6, 9];
var result = data.reduce(reducer, 0);

console.log(result);
