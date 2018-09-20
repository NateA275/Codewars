## Codewars Description
The code provided is supposed replace all the dots `.` in the specified String `str` with dashes `-`

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String `str` will never be null.

## Solution
```Javascript
var replaceDots = function(str) {
  return str.replace(/[.]/g, '-'); //Use REGEX semantics to find all occuracnes of '.' globally and replace with '-'
}
```

## Link
https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript
