'use strict';
let _ = require('lodash');
let original = 600851475143; 

// sieve of erasthenes
function simpleSieve(n) {
  let a = new Array(n).fill(1);
  a[1] = 0;
  var p = 2;
  while (p*p <= n) {
    var j = p*p;
    a[p] = 0;
    while (j <= n) {
      a[j] = 0;
      j = j + p;
    }
    do { 
      p++; 
    } while (a[p] === 0);
  }
  return _(a)
    .map((value, index) => {
      if (value !== 0) {
        return index;
      }
    })
    .filter((value) => value !== undefined)
    .value();
}

var number = 101;
console.log('Finding largest prime factor for:', number);
console.time('run-sieve');
var primes = simpleSieve(number);
console.log(primes);
console.timeEnd('run-sieve');

