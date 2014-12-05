module.exports.newArray = function(a, b, c, d) {
  return [a,b,c,d];
}


module.exports.firstAndLast = function(arr) {
  var lastElementIndex = arr.length - 1;
  return [arr[0], arr[lastElementIndex]];
}



