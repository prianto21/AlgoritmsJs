// +8 with 1 trial


// More Zeros than Ones

/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

*/
function moreZeros(s){
    const noDouble=s.split('').filter(removeDoubles)
    .map(convertToAscii)
    .map(convertToBinary)
    .filter(areMoreZeros)
    .map(convertToDecimal)
    .map(convertToChar);
    return noDouble;
  }

function removeDoubles(item,idx,arr){
    return arr.indexOf(item)===idx;
}

function convertToAscii(c){
    return c.charCodeAt(0);
}
function convertToBinary(num){
    return num.toString(2);
}
function areMoreZeros(str){
    const zeros=str.replace(/1/g, '').length;
    const ones=str.replace(/0/g, '').length;
    return zeros > ones;
}
function convertToDecimal(bi){
    return parseInt(bi,2);
}
function convertToChar(num){
    return String.fromCharCode(num);
}

  console.log(moreZeros('abcde'));
  console.log(moreZeros('Great job!'));
  console.log(moreZeros('abcdeabcde'));

//   Bouncing Balls

/**
DESCRIPTION:
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled). 
 
 */

function bouncingBall(h,  bounce,  window) {
    if(h > 0 && bounce >0 && bounce < 1 && window <h){
      let count=1;
      while(h>window){
        h*=bounce;
        count+=2;
      }
      return count -2;
    }
    return -1;
  }

//   Backspaces in string

/**
 Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
 */

function cleanString(s) {
    let result=[];
    for (let i=0; i<s.length;i++){
      const char=s[i];
      if(char==="#"){
        result.pop();
      }else{
        result.push(char)
      }
    }
    return result.join("");
  }

  function cleanString(s) {
    let result = [];
    [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
    return result.join("");
  }