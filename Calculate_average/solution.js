function find_average(array) {
  return array.reduce((initial, num) => initial + num, 0)/array.length;
};