## Codewars Description
Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Note: There are ONLY integers in the JAVA and C# versions of this Kata.

## Solution
```Javascript
function cubeOdd(arr) {
  return /[a-z]/gi.test(arr.join('')) ? undefined : arr.filter((n) => (n%2 !== 0)).reduce((a, i) => (a + i*i*i), 0);
}
```

## Link
https://www.codewars.com/kata/sum-of-odd-cubed-numbers
