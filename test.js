var x = 3;
var y = 7;
var max = 15;
var result = 0; //hasil
var array = [];

for(var i=0; i<max-1; i++){
    if((i%x==0)||(i%y==0)){
        result+=i;
        array.push(i);
    }
}

// console.log(result)
// console.log(array);

// function simpleArraySum(ar) {
//     let result=0;
//     for(let i=0; i <=ar.length; i++){
//         result+=i;
//     }
//     return result;

// }

// console.log(simpleArraySum([1,2,3,4,5,6]));

let jumlah = 0;
for (let i = 1; i <= 5; i++){
        if(i%2 == 0){
               jumlah += i;
        }else{ 
              jumlah += 1;
        }
}

// console.log(jumlah);
// let total = 10;
// if(total%2 == 0 && (total*2)%6 > 5){
//     console.log("Hello World!");
// }else if((total*3)%6 == 0){
// console.log("Selamat Pagi");
// }else{
// console.log("Good Morning!");
// }

let fib0 = 0;
let fib1 = 1;
let fib2 = fib1 + fib0;

while(fib2 <= 10){
    fib0 = fib1;
    fib1 = fib2;
    fib2 = fib1 + fib0;
    // console.log(", " + fib1);
}

// function fibonanci(num){
//     let temp=0;
//     for(i=1; i<num; i++){
//         if(num<=2){
//              temp=1;
//         }else{
//             temp=num(num-1)+fibonanci(num-2);
//         }
//     }
//     return temp;
//     // 1 1 2 3 5 8 13 21 34
//     // 5: 5(5-1)
// }

// console.log(fibonanci(3));

const fibonanciSequence=num=>{
    let x=1,
        y=0,
        temp;
        while(num>=0){
            temp=x;
            x=x+y;
            y=temp;
            num--;
        }
        return y;
}
console.log(fibonanciSequence(5));