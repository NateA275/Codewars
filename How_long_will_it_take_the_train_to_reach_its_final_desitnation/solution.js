function reachDestination(distance, speed) {
  let t = Math.round((distance/speed)*2)/2;
  let str = (t === 1) ? 'hour' : 'hours';
  return(`The train will be there in ${t} ${str}.`);
};