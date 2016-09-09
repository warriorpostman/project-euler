var _ = require('lodash');

numbers = _.range(0, 1000);

var sum = _.reduce(numbers, (result, value) => { 
    return (value % 3 === 0 || value % 5 === 0)
      ? result + value : result;
  }, 0);

console.log('Sum of all multiples of 3 or 5 below 1000: ', sum);

