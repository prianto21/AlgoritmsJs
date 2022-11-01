// const str = "The quick brown fox jumps over a lazy dog"; 
// const vowels = str.match(/[aeiou]/gi); 
// const consonants = str.match(/[^aeiou]/gi);   
// vowels.concat([''],consonants).forEach(k => { console.log(k); } );

// function vowelsAndConsonants(s) {
//     var atom = s.length;
//     var i = 0;
//     while (i <= atom)
//     {
//         if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
//             console.log('\n' + s[i]);
//         }
//         else {
//             console.log('\n' + s);
//         }
//     }

// }

// vowelsAndConsonants("Sample Class");

const vowelsAndconsonants = str => {
    const vowels=['a','e','i','o','u'];
    //convert string to array and get rid of non alphabets as we are just interested on consonants and vowel
    const str_array=str.replace(/[^a-zA-Z]/g, '').split('');
    //pluck vowels
    const vowels_final=str_array.filter( a => vowels.includes(a.toLowerCase()));
    //pluck consonants
    const consonant_final=str_array.filter( a => !vowels.includes(a.toLowerCase()));
  //to print any vowels from a word on a new line and then consonant in the order they appear. 
    return   vowels_final.join('') + " " + '\n' + consonant_final.join('').toLowerCase();
  }
  
  // console.log(vowelsAndconsonants('tEstOnlY and nothing else'))
  console.log(vowelsAndconsonants('Sample Case'))
  // console.log(vowelsAndconsonants('I love stackoverflow'))