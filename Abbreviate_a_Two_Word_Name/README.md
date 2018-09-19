## Codewars Description
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

## Whiteboard
<img src="https://github.com/NateA275/codewars/blob/master/Abbreviate_a_Two_Word_Name/whiteboard.jpg">

## Solution
```Javascript
function abbrevName(name){
  let splitName = name.split('');
  return(`${splitName[0]}.${splitName[splitName.indexOf(' ')+1]}`.toUpperCase());
}
```

## Link
https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
