module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello" + " " + firstName + "," + "\n\n" +message + "\n\n" + "Good chat." + "\n" + senderName;
};
module.exports.formLetter("Chewbacca", "Todd", "You've got great hair.");

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return startA,endA + startB,endB;
};
module.exports.sliceItAndCombineIt("Paint a picture", 0,5,11,12);

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};
module.exports.findFirstMatch("Violets are blue", "blu");

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};
module.exports.findLastMatch("Violets are blue", "are");

module.exports.substringBetweenMatches = function(text, searchString) {
  return text.substring(function indexOf(searchString), lastIndexOf(searchString);
};
module.exports.substringBetweenMatches("Violets are blue, the sky is really blue", "blue");
