'use strict';

// NOTE: found this solution here: // https://github.com/necolas/project-euler/blob/master/003/003.js
// ADD'L NOTE: I mistakenly tried running sieves to find all prime factors, and ran into memory limits
function findMaxPrime(num) {
  // starting index (first prime)
  var i = 2;
  var count = 0;
  while (num > i) {
    if (num % i === 0) {
      num = num / i;
      console.log('new num', num);
      count++;
    }
    i++;
  }
  console.log('number of divisions:', count);

  console.log(i);
  return i;
}
console.time('find-max-prime');
let original = 600851475143; 
console.log('Finding largest prime factor for:', original);
findMaxPrime(original);
console.timeEnd('find-max-prime');
