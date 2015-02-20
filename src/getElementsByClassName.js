// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  var hasClass = function(element){
    if (element.classList)
      return element.classList.contains(className);
    else
      return false;
  };

  function checkChildrenForClass(element){
    for(var i = 0; i < element.childNodes.length; i++){
      if (hasClass(element.childNodes[i])){
        results.push(element.childNodes[i]);
      }

      if (element.childNodes[i].hasChildNodes()){
        checkChildrenForClass(element.childNodes[i]);
      }
    }
  }

  checkChildrenForClass(document);
  return results;
};
