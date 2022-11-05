// Hello, Name or World!
/*function hello(name){
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

console.log(hello("Melsi"));
console.log(hello("MuRsHmA"));
*/

// 21otk 7:56
// Beginner Series #2 Clock

// function past(h, m, s){
//     return (3600 * h + 60 * m + s) * 1000;
//   }

/*const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}
console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)

*/

// can we divide it?

function isDivideBy(number, a, b) {
  if (number % a == 0 && number % b == 0) {
    return true
  } else {
    return false
  }
}

console.log(isDivideBy(20,4,5));
console.log(isDivideBy(20,6,5));
console.log(isDivideBy(20,10,5));

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

  console.log(rentalCarCost(10));


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