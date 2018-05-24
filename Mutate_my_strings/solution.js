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