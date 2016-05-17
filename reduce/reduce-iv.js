//
// The reduceRight() method applies a function against an accumulator
// and each value of the array (from right-to-left) has to reduce it to a single value.
//

var data = [1,2,3,4,"4"];

var sum = data.reduceRight(function(acc, value) {
  return acc + value;
});

console.log(sum);
