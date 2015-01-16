/*- Complete the `sumNumbers` function. This function should:
    - return the sum of all numbers inside of the array that is passed to the function
    - if the array is empty, this function should return 0

    For example:
    
    ```javascript
    sumNumbers([1, 2, 3]) // should return 6
    ```
*/
module.exports.sumNumbers = function(arr){
  var num = 0;
  for (var i = 0; i < arr.length; i++){
    num += arr[i];
  }
  return num;
}
/*- Complete the `splitAndLowerCaseString` function. This function should:
    - split the `inputString` argument into an array of strings by commas
    - return an array with the set of split strings in lowercase format

    For example:
    
    ```javascript
    splitAndLowerCaseString("TEST") // returns ["test"]
    splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") // returns ["this", "is", "split", "by", "commas"]
    splitAndLowerCaseString("THIS HAS NO COMMAS") // returns ["this has no commas"]
    ```

    > Hint: You should use the built-in string functions `split` and `toLowerCase`.
*/
module.exports.splitAndLowerCaseString = function(arr){
  var words = arr.split(",");
  var newWords = [];
  for (var i = 0; i < words.length; i++){
    var lowerCaseWord = words[i].toLowerCase();
    newWords.push(lowerCaseWord);
  }
  return newWords;
}
/*- Complete the `addIndex` function. This function should:
    - create and return a new array of all inputs as strings
    - each of the new strings should start with "[index] is [data element at index]"

    For example:
    
    ```javascript
    addIndex([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
    addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
    ```*/
module.exports.addIndex = function (arr){
  var newArr = [];
  for (i = 0; i < newArr.length; i++){
    var newStrings = arr[i].toString();
    newArr.push(newStrings);

  }
  return newArr;
}
