var gimme = function (inputArray) {
  let newArray = [];
  inputArray.forEach((i) => newArray.push(i));
  newArray.sort(function(a,b) {return a - b;})
  return (inputArray.indexOf(newArray[1]));  
};