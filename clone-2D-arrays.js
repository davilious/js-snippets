var array = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]], emptyArray;
//
// Clones 2 dimensional arrays
//
function cloneArray(array) {
  return array.map(function(row) {
    return row.slice();
  })
}

emptyArray = cloneArray(array);



