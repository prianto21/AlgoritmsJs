// + 2 every kata

// Sum of the first nth term of Series
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
/*
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/
function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (i * 3 + 1);
  }
  return sum.toFixed(2);
}

// i = 0 *3+1 =1
// i=1 *3+1=4
// i=2 *3+1=7
// i=3 * 3 +1=10
// console.log(SeriesSum(4));


// Fizz Buzz
/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
// Return an array
function fizzbuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr;
}

fizzify = fizzbuzz;
function fizzbuzz(n) {
  return [...Array(n + 1).keys()].slice(1).map(x => x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x);
}

// String ends with?

/**
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

function solution(str, ending) {
  return str.endsWith(ending);
}

// Mumbling
/**
 * DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(s) {
  // pecah jadi array
  const strArr = s.split("");
  const result = [];
  // looping sejumlah array
  for (let i = 0; i < strArr.length; i++) {
    let temp = '';

    for (let j = 0; j <= i; j++) {
      // ubah huruf pertama besar sisanya kecil
      if (j === 0) {
        temp += strArr[i].toUpperCase();
      } else {
        temp += strArr[i].toLowerCase()
      }
    }
    result.push(temp);
  }
  return result.join("-");
}

// note toLower fungsi untuk mengecilkan semua string , toUpperCase untuk membuat huruf besar pada string
// split untuk membuat string menjadi array 
// map fungsi di js yg ada 2 parameter yaitu var_baru dan accumulator/indexing
// join menyatukan array memjadi string dengan string penghubung
const accum2 = (s) => {
  return s.toLowerCase().split('')
    .map((huruf, i) => huruf.toUpperCase() + huruf.repeat(i))
    .join('-');
}
// test
// console.log(accum2("ranto"));
// console.log(accum("abcdef"));


// Highest and Lowest
/**
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

// parseInt merubah string menjadi int
function highAndLow(numbers) {
  let number=numbers.split(" ");
  let min = parseInt(number[0]);
  let max = parseInt(number[0]);
  for (i = 0; i < number.length; i++) {
    if (min < parseInt(number[i])) {
      min = parseInt(number[i]);
    }

    if (max > parseInt(number[i])){
      max = parseInt(number[i]);
    }
  }
  return min + ' ' + max;
}

function highAndLow(numbers){
  let arr = numbers.split(' ');  
  return Math.max(...arr) + ' ' + Math.min(...arr);
}
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");


// Get the Middle Character
function getMiddle(s){
  if(s.length%2===1){
    return s.charAt(s.length/2);
  }else{
    return s.charAt(s.length/2-1) + s.charAt(s.length/2);
  }
}

console.log(getMiddle("Yakult"));
console.log(getMiddle("Ranto"));