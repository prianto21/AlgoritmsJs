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