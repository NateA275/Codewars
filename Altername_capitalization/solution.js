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