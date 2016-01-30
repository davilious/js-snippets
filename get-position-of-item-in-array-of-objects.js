//
// Get position of item in array of objects
//

var allColors = [
  { name: 'blue', multiple: false },
  { name: 'red', multiple: false },
  { name: 'yellow', multiple: false},
  { name: 'black', multiple: true },
  { name: 'white', multiple: true }
];

function getPositionOf(item) {
  return allColors.map(function(el) {
    return el.name;
  }).indexOf(item) ;	
}

console.log(getPositionOf('blue'));