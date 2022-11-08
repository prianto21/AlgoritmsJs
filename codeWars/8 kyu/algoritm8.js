// Hello, Name or World!
function hello(name){
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

// console.log(hello("Melsi"));
// console.log(hello("MuRsHmA"));

// 21otk 7:56
// Beginner Series #2 Clock

function past(h, m, s){
    return (3600 * h + 60 * m + s) * 1000;
  }

const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}
// console.log(past(0, 1, 1), 61000)
// console.log(past(1, 1, 1), 3661000)
// console.log(past(0, 0, 0), 0)
// console.log(past(1, 0, 1), 3601000)
// console.log(past(1, 0, 0), 3600000)



// can we divide it?

function isDivideBy(number, a, b) {
  if (number % a == 0 && number % b == 0) {
    return true
  } else {
    return false
  }
}

// console.log(isDivideBy(20,4,5));
// console.log(isDivideBy(20,6,5));
// console.log(isDivideBy(20,10,5));

// Transportation on vacation
/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
*/

function rentalCarCost(d) {
    total=40*d;
    if(d >=7) return total -50;
    if(d >=3) return total -20
    return total;
  }

  // console.log(rentalCarCost(10));


  // 5-11-22
  // Expressions Matter
/*
DESCRIPTION:
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

expressionsMatter(1,1,1)  ==>  return 3

*/

function expressionMatter(a, b, c) {
  const x1= a*(b+c);
   const x2=a*b*c;
   const x3=a+b*c;
   const x4=a+b+c;
   const x5=(a+b)*c;
   
   return Math.max(x1,x2,x3,x4,x5);
   
 }



//  Summation
/**
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

var summation = function (num) {
  // jumlahkan seluruh angka dari 1 sampai num
  let result=0;
  for(i=1; i <=num; i++){
      result+=i;
  }
  return result;
}

// console.log(summation(100));

// Reversed Strings


/**
 * Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

// function solution(str){
//   return str.split('').reverse().join('');
// }
const solution = s => [...s].reverse().join('');
// console.log(solution("Melsy"));

// 7nov22

// Counting sheep...
/**
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */
function countSheeps(arrayOfSheep) {
  let sum=0;
  for(i=0; i<arrayOfSheep.length; i++){
    if(arrayOfSheep[i]=== true){
      sum+=1;
    }
  }
  return sum;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

  // console.log(countSheeps(array1));


  // Convert a String to a Number!
  /**
   * DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
   */

const stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}


// String repeat
/**
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
  let result =s.repeat(n);
  return result;
}

function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }

  // Will you make it?
  /**
   * You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
   */

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg*fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

// Grasshopper - Basic Function Fixer
/**
 * Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
 */

function addFive(num) {
  var total = num + 5
  return total;
}


// Beginner - Reduce but Grow
/**
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x) {
  return x.reduce((a, b) => a * b);
}

const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};