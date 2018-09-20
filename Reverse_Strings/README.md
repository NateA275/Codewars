## Codewars Description
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

## Solution
```Javascript
function solution(str){
  let ans = '';
  for(let i = str.length-1; i>=0; i--) {
    ans += str[i];
  }
  return ans;
}
```

## Link
https://www.codewars.com/kata/reversed-strings/train/javascript
