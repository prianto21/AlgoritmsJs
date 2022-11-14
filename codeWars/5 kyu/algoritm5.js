/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/
function cakes(recipe, available) {
  let min = Infinity;
  Object.keys(recipe).forEach(key => {
    if (available[key] === undefined) {
      available[key] = 0;
    }
    const totalCakes = Math.floor(available[key] / recipe[key]);
    if (totalCakes < min) {
      min = totalCakes;
    }
  })
  return min;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))

// Extract the domain name from a URL
/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" 
 */


// function domainName(url){
//your code here regex
// return url.replace(/https{0,1}:\/\/|www./g,'').split('.')[0];
// }

function domainName(url) {
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// console.log(domainName("http://google.com"));
// console.log(domainName("http://www.zombie-bites.com"));

// Human Readable Time
/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 * @param {*} seconds 
 * @returns 
 */
// const humanReadable= seconds=>  
//   [
//       ('0'+parseInt(seconds/(60*60))).slice(-2),
//       ('0'+parseInt(seconds/60%60)).slice(-2),
//       ('0'+seconds % 60).slice(-2)
//   ].join(':')

function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds / 3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds / 60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}
// console.log((humanReadable(0))); 
// ' 00:00:59' + ' humanReadable(59)'));
// console.log((humanReadable(59)));
// ' 00:01:00', +'humanReadable(60)'));
// console.log((humanReadable(60)));
// , '00:01:30', 'humanReadable(90)'
// console.log((humanReadable(1234)));
// console.log((humanReadable(3599), '00:59:59', 'humanReadable(3599)'));
// console.log((humanReadable(3600), '01:00:00', 'humanReadable(3600)'));
// console.log((humanReadable(45296), '12:34:56', 'humanReadable(45296)'));


// Scramblies
/**
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

 * @param {string1} str1 
 * @param {string2} str2 
 * @returns 
 */
function scramble(str1, str2) {
  // a place to store str1 letter counts
  const letterCounts = {};

  // iterate for str1
  for (let i = 0; i < str1.length; i++) {
    // set a property on the object that is the current letter
    // if the property did'nt exist,set it to 1
    // otherwise increment the value
    const currentLetter = str1[i];
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
  }
  console.log(letterCounts);

  // iterate over str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    // if the current letter is in the object and the count is greater than 0
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    } else {
      // else break out of the loops
      return false;
    }
  }
  return true;
}

// console.log(scramble('rkqodlw', 'world'));
// console.log(scramble('cedewaraaossoqqyt', 'codewars'));
// console.log(scramble('katas', 'steak'));

// Maximum subarray sum
/**
 * DESCRIPTION:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */

var maxSequence = function (arr) {
  // place keep track of currentSum //initialize to 0
  let currentSum = 0;
  // place keep to keep track of maxSum // initialize to 0
  let MaxSum = 0;

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    // set currentSum to max of currentSUm +currentNumber and 0
    currentSum = Math.max(currentSum + currentNumber, 0);
    // set MaxSum to max currentSum and maxSum
    MaxSum = Math.max(currentSum, MaxSum);
  }
  return MaxSum;
}

function maxSequence(arr) {
  var max = 0
  
  for (var i = 0; i < arr.length; i++) {
    for (var sum = 0, j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > max) max = sum
    }
  }
  
  return max
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));