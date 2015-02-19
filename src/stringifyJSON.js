// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var newString = '';
  for (var key in obj){
    newString += key;
    newString += obj[key];
  }

  newString = '"{' + newString + '}"';
  console.log(newString);
  return newString;
};

var makeString = function(object) {
  if (typeof object === string){
    object = '"' + object + '"';
  }
  if (typeof)
}
