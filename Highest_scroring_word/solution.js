function high(x) {
  let myArray = x.split(' ');
  let sumValues = myArray.map( word => word.split('').reduce((acc, i) => acc + i.charCodeAt(0)-96, 0));
  let index = sumValues.indexOf(Math.max.apply(Math, sumValues));
  return myArray[index];
};