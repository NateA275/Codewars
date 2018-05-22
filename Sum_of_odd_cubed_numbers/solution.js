function cubeOdd(arr) {
  return /[a-z]/gi.test(arr.join('')) ? undefined : arr.filter((n) => (n%2 !== 0)).reduce((a, i) => (a + i*i*i), 0);
};