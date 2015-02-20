// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var results = '';

  if (typeof obj === "number"){
    results = obj.toString();
  };

  if (obj === null){
    results = 'null';
  }

  if (typeof obj === "boolean"){
    results = obj.toString();
  }

  if (typeof obj === "string"){
    results = results + '"' + obj + '"';
  }

  if (Array.isArray(obj)){
    results = '[';
    for (var i = 0; i < obj.length; i++){
      results = results + stringifyJSON(obj[i]) + ',';
    }
    if (results.length > 1){
      results = results.substring(0, results.length - 1);
    }
    results += ']';
  }

  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)){
    results = '{';
    for (var i in obj){
      if (i !== 'functions' && i !== 'undefined'){
        results = results + '"' + i + '"' + ":" + stringifyJSON(obj[i]) + ',';
      }
    }
    if (results != '{'){
      results = results.substring(0, results.length - 1);
    }
    results += '}';
  }

  return results;
};
