## Codewars Description
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham

## Solution
```Javascript
function mutateMyStrings(stringOne, stringTwo) {
  let ans = `${stringOne}\n`;
  stringOne = stringOne.split('');
  stringTwo = stringTwo.split('');

  for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
          stringOne[i] = stringTwo[i];
          ans += `${stringOne.join('')}\n`;
      }
  }
  
  return ans;
}
```

## Link
https://www.codewars.com/kata/mutate-my-strings
