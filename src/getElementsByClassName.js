// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var results = [];
  var body = document.body;

  var hasClass = function(element, className){
    return element.classList.contains(className);
  };

  hasChildNodes() // returns boolean
};

/* algorithm

base case is no more children.

loop through children of document.body
  if a child has the class, add it to the results array
  check to see if that child element has children

loop through all those children
  if a child has the class, add it to the results array
  check to see if that child element has children

*/
