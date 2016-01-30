//
// Search for a item in an array of objects
//

var allColors = [
  { name: 'blue', multiple: false },
  { name: 'red', multiple: false },
  { name: 'yellow', multiple: false},
  { name: 'black', multiple: true },
  { name: 'white', multiple: true }
];

function isInArray(item) {
  return allColors.map(function(el) {
    return el.name;
  }).indexOf(item) !== -1 ;	
}

console.log(isInArray('white'));