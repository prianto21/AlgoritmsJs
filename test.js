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

function simpleArraySum(ar) {
    let result=0;
    for(let i=0; i <=ar.length; i++){
        result+=i;
    }
    return result;

}

console.log(simpleArraySum([1,2,3,4,5,6]));
