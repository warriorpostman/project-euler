(function() {
  'use strict';

  // sieve of eratosthenes
  module.exports = {
    simpleSieve: simpleSieve,
    segmentedSieve: segmentedSieve
  };

  function simpleSieve(n) {
    let a = new Array(n).fill(1);
    a[0] = 0;
    a[1] = 0;
    var p = 2;
    while (p*p <= n) {
      var j = p*p;
      while (j <= n) {
        a[j] = 0;
        j = j + p;
      }
      do { 
        p++; 
      } while (a[p] === 0);
    }
    return a.map((value, index) => {
        if (value !== 0) {
          return index;
        }
      })
      .filter((value) => value !== undefined);
  }

  function segmentedSieve(n) {
    var limit = Math.floor(Math.sqrt(n)) + 1;
    console.log('limit', limit);
    var primes = simpleSieve(limit);
    var low = limit;
    var high = 2*limit;
    while (low < n) {
      var mark = new Array(limit+1).fill(true);
      for (var i = 0; i < primes.length; i++) {
        var loLim = Math.floor(low/primes[i]) * primes[i];
        if (loLim < low) {
          loLim += primes[i];
        }

        for (var j=loLim; j<high; j+=primes[i]) {
          mark[j-low]= false;
        }
      }

      var segment= new Array();
      for (var i = low; i<high; i++) {
        if (mark[i - low] === true) {
          segment.push(i);
        }
      }
       
      primes = primes.concat(segment);
      low = low+limit;
      high = high+limit;
      if (high >= n) { 
        high = n;
      }
    }
    return primes;
    
  }
}());

