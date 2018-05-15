function isNice(arr) {
  let flag = false;
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(arr.includes(num+1) || arr.includes(num-1)) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}