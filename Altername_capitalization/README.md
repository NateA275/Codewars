## Codewars Description
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

## Solution
```Javascript
function capitalize(s){
  let numArray = s.split('');
  let answer = ['', ''];
  
  for(let i = 0; i < numArray.length; i++) {
    if(i%2 === 1) {
      answer[0] += numArray[i].toLowerCase();
      answer[1] += numArray[i].toUpperCase();
    } else {
      answer[0] += numArray[i].toUpperCase();
      answer[1] += numArray[i].toLowerCase(); 
    }
  }
  return answer;
};
```

## Link
https://www.codewars.com/kata/alternate-capitalization/train/javascript
