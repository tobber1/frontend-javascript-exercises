/*- Create an `addItem` function. This function should take two arguments:
    - the first argument is the item you want to add to the end of the list
    - the second argument is the array that the item will be added to. 
    - Don't add an item to the list if it already exists in the list

    For example:
    
	```javascript
	addItem(1, [5,4,3,2]); // returns [5,4,3,2,1]
	addItem("brown", ["green", "yellow"]); // returns ["green", "yellow", "brown"]
	addItem("brown", ["green", "yellow", "brown"]); // returns ["green", "yellow", "brown"] since "brown" was already present*/
//Array.prototype.indexOf(item) - returns the index of the item's first occurance in the array, or -1 if the item doesn't occur in the array
//Array.prototype.push(item) - attaches a new item to the the end of an array
module.exports.addItem = function(item, arr){ //the function take two parameters, and item and an array
  //if the item does not exist in the array, add the item to the end of the array
  if(arr.indexOf(item) === -1){
    arr.push(item);
  }
  //then return the array, regardless
  return arr;
}


/*Create a `reverseSortedList` function. This function should:
	- take one argument, an array
	- it should return the array sorted but in reverse

	For example:
	
	```javascript
	reverseSortedList([2,4,1,5,3]); // returns [5,4,3,2,1]
	reverseSortedList(["b", "d", "q", "a"]); // returns ["q", "d", "b", "a"]
*/
// Array.prototype.sort([comparatorFn]) - Returns a sorted version of the original array sorted in a natural ascending order
// Array.prototype.revers() - Returns a reversed version of the original array

module.exports.reverseSortedList = function (arr) { //this function takes one parameter, an array
  //sort the array, then return the reversed sorted array
  return arr.sort().reverse();
};