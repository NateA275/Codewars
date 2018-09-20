## Codewars Description
Write a simple regex to validate a username. Allowed characters are:

-lowercase letters

-numbers

-underscore

Length should be between 4 and 16 characters (both included).

## Solution
```Javascript
function validateUsr(username) {
  return /^[\d*?\_*?a-z*?]{4,16}$/.test(username);
}
```

## Link
https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
