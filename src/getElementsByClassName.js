// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  var allElements = document.body;
  var hasClass = function(element){
    if (element.classList){
      return element.classList.contains(className);
    }
    else {
      return false;
    }
  };

  function checkChildrenForClass(element){
    for(var i = 0; i < element.childNodes.length; i++){
      if (element.childNodes[i].hasChildNodes()){
        checkChildrenForClass(element.childNodes[i])
      }

      if (hasClass(element.childNodes[i])){
        results.push(element.childNodes[i]);
      }
    }
  }

  checkChildrenForClass(allElements)
  console.log(results)
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
