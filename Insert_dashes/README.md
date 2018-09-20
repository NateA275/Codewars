## Codewars Description
Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

## Solution
```Javascript
function insertDash(num) {
  let string = num.toString();
  return string.replace(/[13579](?=[13579])/g, "$&-");
}
```

## Link
https://www.codewars.com/kata/insert-dashes
