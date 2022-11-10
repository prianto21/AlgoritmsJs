function hitung(num){
    let result=0;
    for(let i=1; i < num; i++){
        if(i%3==0 || i%7==0){
            result+=num[i];
        }
    }
    return result
}

console.log(hitung(15));
// console.log(hitung(2021));