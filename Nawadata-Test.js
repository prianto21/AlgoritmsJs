// function vowelAndConsonant(str){
//     // console.log([...str]);
//     // console.log(Array.from(str));
//     str = str.replace(/\s/g, '').toLowerCase()
//     let Vowel=[];
//     let Konsonan=[];
//     str.split('').toLowerCase;
//     for(i=0; i<=str.length; i++){
//         // console.log(str[i]);
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             console.log(Vowel.push(str[i]));
//         }
//         else {
//             console.log(Konsonan.push(str[i]));
//         }
//     }

    
// }

// vowelAndConsonant('Sample Case');

// function vowelsAndConsonants(s) {
//     let vowels = [];
//     let consonas = [];
//     for(var i=0; i<s.length ; i++) {
//         if((s[i]=='a')||(s[i]=='e')||(s[i]=='i')||(s[i]=='o')||(s[i]=='u')){
//             vowels.push(s[i])
//         } else {
//             consonas.push(s[i]);
//         }
//     }
    
//     let concatArr = [...vowels, ...consonas];
//     for (let i of concatArr) {
//         console.log(i);
//     }
// } 
// vowelsAndConsonants('Sample Case');

// function vowelsAndConsonants(s) {




// s = s.replace(/\s/g, '')
//     // This lists, all the vowels. Since I know the input is all lowercase, there is no need for uppercase. A lowercase method could also be used.
    
//         const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     // The input is split up to avoid printing the entire string, and is stored in a variable.
    
//         var letters = s.split('');
    
//     // An array to hold the vowels is created.
    
//         var vowelsFound = [];
    
//     // An array to hold the consonants is created.
    
//         var consonantsFound = [];
    
    
//     // Loops through all the split up characters held in the letters variable.
    
//         for (var i in letters) {
    
//     // If statement tests by using include to see if any of vowels match the i looper.
    
//             if (vowels.includes(letters[i])) {
    
//     //If any vowels do match, then they get added to the end of the vowelsFound array
//     vowelsFound.push(letters[i]);

//     //The same process is used for the consonants.
    
//             } else {
//                 consonantsFound.push(letters[i]);
//             }
//         }
    
//     //Prints the vowels in their order, on a new line for each character.
    
//         console.log(vowelsFound.join('\n'));
//         console.log(consonantsFound.join('\n'));
//     }

//     vowelsAndConsonants("Sample Case")


function vowelsAndConsonants(str) {
    str = str.replace(/\s/g, '').toLowerCase()
    let conso ="";
    let Vowel=""
    for(var i=0;i<str.length;i++){
        if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||
        (str[i]=="u")){
            Vowel+=str[i];
        }else{
            conso += str[i];
        }
    }
    console.log(Vowel);
    console.log(conso);
}

vowelsAndConsonants("Sample Case");