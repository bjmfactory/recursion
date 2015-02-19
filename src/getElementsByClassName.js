// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  var body = document.body;
  var element = body;
  var children = element.childNodes;
  var hasClass = function(element){
    if (element.classList){
      return element.classList.contains(className);
    }
    else {
      return false;
    }
  };

  for(var i = 0; i < children.length; i++){
    if (hasClass(children[i])){
      results.push(children[i]);
    }
    if (children[i].hasChildNodes()){
      element = children[i];
      // getElementsByClassName(className); This is where I would expect to call function
      // within itself, but it give me a stack overflow.
    }
  }

  return results;
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
