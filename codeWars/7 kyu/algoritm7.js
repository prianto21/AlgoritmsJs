// + 2 every kata

// Sum of the first nth term of Series
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
/*
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/
function SeriesSum(n)
{
  let sum=0;
  for(let i=0; i<n; i++){
    sum+=1/(i*3+1);
  }
  return sum.toFixed(2);
}

// i = 0 *3+1 =1
// i=1 *3+1=4
// i=2 *3+1=7
// i=3 * 3 +1=10
console.log(SeriesSum(4));


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
function fizzbuzz(n)
{
  const arr=[];
  for(let i=1; i<=n; i++){
    if(i%3===0 && i%5===0){
      arr.push('FizzBuzz')
    }else if(i%3===0){
      arr.push('Fizz')
    }else if(i%5===0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr;
}

fizzify = fizzbuzz;
function fizzbuzz(n) {
  return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}
