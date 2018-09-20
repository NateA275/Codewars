## Codewars Description
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

## Solution
```Javascript
function toCamelCase(str){
  str = str.split(/-|_/);
  for(let i = 1; i < str.length; i++) {
    str[i] =  str[i].charAt(0).toUpperCase() + str[i].slice(1)   
  };
  return str.join('');
}
```

## Link
https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
