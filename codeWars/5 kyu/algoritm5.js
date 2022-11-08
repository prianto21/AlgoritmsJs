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
    let min=Infinity;
    Object.keys(recipe).forEach(key=>{
      if(available[key]=== undefined){
        available[key]=0;
      }
      const totalCakes=Math.floor(available[key]/recipe[key]);
      if(totalCakes < min){
        min=totalCakes;
      }
    })
    return min;
  }

  console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},{sugar: 500, flour: 2000, milk: 2000}))
  
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

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

console.log(domainName("http://google.com"));
console.log(domainName("http://www.zombie-bites.com"));

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
    HH = "0" + Math.floor(seconds/3600);
    seconds -= HH * 3600;
    MM = "0" + Math.floor(seconds/60);
    seconds -= MM * 60;
    SS = "0" + seconds;
    return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
  }
  console.log((humanReadable(0))); 
  // ' 00:00:59' + ' humanReadable(59)'));
    console.log((humanReadable(59)));
    // ' 00:01:00', +'humanReadable(60)'));
    console.log((humanReadable(60)));
    // , '00:01:30', 'humanReadable(90)'
    console.log((humanReadable(1234)));
    // console.log((humanReadable(3599), '00:59:59', 'humanReadable(3599)'));
    // console.log((humanReadable(3600), '01:00:00', 'humanReadable(3600)'));
    // console.log((humanReadable(45296), '12:34:56', 'humanReadable(45296)'));