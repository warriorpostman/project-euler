'use strict';
function numberIsPalindrome(num) {
  var strNum = num.toString();
  var middleFloor = Math.floor(strNum.length/2)
  var middleCeil = Math.ceil(strNum.length/2);
  var first = strNum.substring(0,middleFloor);
  var last = strNum
    .substring(middleCeil, strNum.length)
    .split('')
    .reverse()
    .join('');
  return (first === last);
}

var upper = 999;
var lower = 100;

console.time('calculate');
var maxPalindrome = -1;
for (var j = upper; j >= lower; j--) {
  for (var i = upper; i >= lower; i--) {
    if (numberIsPalindrome(j*i) && j*i > maxPalindrome) {
        maxPalindrome = j*i;
    }
  }
}

console.log('Highest palindrome product: ', maxPalindrome);
console.timeEnd('calculate');
