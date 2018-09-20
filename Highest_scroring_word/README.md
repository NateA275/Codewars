## Codewars Description
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## Solution
```Javascript
function high(x) {
  let myArray = x.split(' ');
  let sumValues = myArray.map( word => word.split('').reduce((acc, i) => acc + i.charCodeAt(0)-96, 0));
  let index = sumValues.indexOf(Math.max.apply(Math, sumValues));
  return myArray[index];
};
```

## Link
https://www.codewars.com/kata/highest-scoring-word
