//
// Given two arrays of objects compare them and get the first item avaiable 
//

var allColors = [
  { name: 'blue', multiple: false },
  { name: 'red', multiple: false },
  { name: 'yellow', multiple: false},
  { name: 'black', multiple: true },
  { name: 'white', multiple: true }
];

var colorSelected = [
  { name: 'blue', multiple: false },
  { name: 'red', multiple: true },
  { name: 'yellow', multiple: false},
  { name: 'black', multiple: true },
  { name: 'black', multiple: true }
];

function getNextColor() {
  var nextColor = allColors.filter(function(el1) {
    return colorSelected.filter(function(el2) {
      return el1.name === el2.name && !el1.multiple;
    }).length === 0;
  });
  return nextColor[0].name || null;  
}

console.log(getNextColor());