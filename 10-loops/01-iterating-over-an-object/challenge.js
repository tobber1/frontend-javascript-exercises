/*- Complete the `getKeys` function. This function should:
	- accept one argument, an object
	- return an array of each of the keys in the object

    For example:
    
    ```javascript
    getKeys({name: "Rob", age: 101}) // returns ["name", "age"]   
    ```
    '*/
module.exports.getKeys = function(obj){ //create function
  var arr = []; //create empty array that we'll store the properties in
  for (var prop in obj) { // looping over the object
    arr.push(prop); // adding the properties to the array
  }
  return arr; //returnoing value
}
/*- Complete the `getValues` function. This function should:
	- accept one argument, an object
     - return an array of each of the values in the object

    For example:
    
    ```javascript
    getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
    ```*/

module.exports.getValues = function(obj){  //create function
  var arr = []; // create array to store the values
  for (var prop in obj){ // loop over the object
    arr.push(obj[prop]); //(obj[prop]) => pulls the value out of the object which  is in turn then added to the array
  }
  return arr;
}
/*- Complete the `objectToArray` function. This function should:
    - convert the object passed in to an array of strings
    - each string should be in the format of "[key] is [value]" for each key/value pair in the object
    - if an empty object is passed in, an empty array should be returned

    For example:
    ```javascript
    objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]
    ```*/

module.exports.objectToArray = function(obj){ // created function
  var arr = []; // creaated empty array to store values
  var str1; //defined variable and making it there so I can usse it howver I waant
  for (var prop in obj){ //loop overthe object
    str1 = prop + " is " + obj[prop]; //concatenate the string with the values of the object and it's coordinting value
    arr.push(str1); // adding the string to the array
  }
  return arr;
}