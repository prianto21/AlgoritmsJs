function deretBilanganGanjilMenurun(sampleInput) {
    let temp=[];;
    for(let i=sampleInput; i<=0; i=i-2){
      
      temp.push(sampleInput[i]);
        // return i;
        // return sampleInput[i];
        
    }
    return temp
}

console.log(deretBilanganGanjilMenurun(9));


// for(let i = 0; i < angka.length; i++){
//     if(angka[i] % 2 == 0 ){
//     genap.push(angka[i]);
//     }


function mencariHurufVokal(sampleInput) {
    const vowels=['a','e','i','o','u'];
    //convert string to array and get rid of non alphabets as we are just interested on consonants and vowel
    const str_array=str.replace(/[^a-zA-Z]/g, '').split('');
    //pluck vowels
    const vowels_final=str_array.filter( a => vowels.includes(a.toLowerCase()));
    //pluck consonants
    // const consonant_final=str_array.filter( a => !vowels.includes(a.toLowerCase()));
  //to print any vowels from a word on a new line and then consonant in the order they appear. 
    return   vowels_final.join('') ;
}

// console.log(sampleInput("indonesia raya"));


function ganjilGenapJumlahKarakter(sampleInput) {
    // Write your code here
    sampleInput.split('');
    for (let i = 0; i < sampleInput.length; i++) {
        if (sampleInput.length % 2 != 0) {
          return "Ganjil"
        }else if(sampleInput.length % 2 == 0){
            return "Genap"
        }
      }
    }
    // console.log(ganjilGenapJumlahKarakter("Si Ganteng"));


    function membalikkanKata(sampleInput) {
        // Write your code here
        const Kata=sampleInput.split('');
        Kata.reverse();
        return Kata.join('');
    
    }

    // console.log(membalikkanKata("Indonesia Raya"));