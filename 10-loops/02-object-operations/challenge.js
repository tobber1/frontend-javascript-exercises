/*- Complete the `copy` function. This function should:
    - take one object as an argument
    - create a new object and copy all of the properties of the input into the new object
    - return the new object

    For example:
    
    ```javascript
    copy({name: "Rob"}) // returns a new object {name: "Rob"}
    ```
*/
module.exports.copy = function(obj){
  var obj1 = {}; //setting up empty objet to put values in
  for (var prop in obj){ //loop over object
    obj1[prop] = obj[prop]; // setting the values of properties in orig obj to the new object
  }
  return obj1;
}

/*- Complete the `extend` function. This function should:
    - take two dictionaries as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`
    - return a modified `dest`

    For example:
    
    ```javascript
    extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
    
    extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}
    ```
*/
module.exports.extend = function (dest, src) {
  for (var prop in src){
    dest[prop] = src[prop];
  }
  return dest;
}
/*
- Complete the `hasElems` function. This function should:
    - take two arguments. The first is an object and the second is an array of elements
    - return `true` when all of the elements in the array are keys in the object, false otherwise*/

module.exports.hasElems = function (obj, arr) { // creaate function with two variables
  var newElems = true; // set new variable to true, negates need for else statement.
  var i = 0;
  for (var prop in obj){ // loop over the object
    if (prop !== arr[i]){ // checking if properties in obj are the same as properties in arr, if not...
      newElems = false; // setting value to false for inequality
    }
    i++;
  }
  if (arr.length == 0){
    newElems = true;
  }
  return newElems;
}