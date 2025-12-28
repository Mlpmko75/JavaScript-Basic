//1.Reverse a String
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

//2.Check Palindrome

// function isPalindrome(str){
//      return str===str.split('').reverse().join('');
// }
// console.log(isPalindrome("madam"));

//3.Count Vowels

// function countVowels(str){
//     let vowels="aeiouAEIOU";
//     let count=0;
//     for(let ch of str){
//         if(vowels.includes(ch))
//             count++;
//     }
//     return count;
// }
// console.log(countVowels("JavaScripteuuu"));

//4.Count Consonants

// function countConsonants(str){
//     let vowels="aeiouAEIOU";
//     let count=0;
//     for(let ch of str){
//         if(/[a-zA-Z]/.test(ch) && !vowels.includes(ch)){
//             count++
//         }

//     }
//     return count;

// }
// console.log(countConsonants("ioA"));

//.5 Find Length without .length 

// function stringLength(str){
//     let count=0;
//     for(let ch of str){
//             count++;
//     }
//         return count++;

// }
// console.log(stringLength("hello"));


//6. First Non-Repeating Character

// function firstChar(str){
//     for(let ch of str){
//         if(str.indexOf(ch)===str.lastIndexOf(ch))
// {
//     return ch;
// }   
//  }
// return null;
// }
// console.log(firstChar("sxiqiddss"));

//7. Check Anagram

// function isAnagram(str1, str2){
//     let s1=str1.split('').sort().join('');
//     let s2=str2.split('').sort().join('');
//     return s1===s2;
// }

// console.log(isAnagram("listenm", "silent"));

//8. Remove Spaces

// function removeSpaces(str){
//     return str.split(' ').join('');
// }
// console.log(removeSpaces("hello world"));

//9.Replace Characters
// function replaceChar(str){
//     return str.replace(/a/g, '@');

// }
// console.log(replaceChar("banana"));

//10. Count Words

// function countWords(str){
//     return str.trim().split(/\s+/).length;

// }
// console.log(countWords("I love JavaScript of"));

//10. Find Duplicate Characters

// function duplicateChars(str){
//     let result=[];
//     for(let ch of str){
//         if(str.indexOf(ch)!==str.lastIndexOf(ch) && !result.includes(ch)){
//             result.push(ch);
//         }
//     }
//     return result;
// }
// console.log(duplicateChars('programming'))

//11.count Frequency of Each Character

// function charFrequency(str){
//     let freq={};
//     for(let ch of str){
//         freq[ch]=(freq[ch] || 0)+1;
//     }
//     return freq;

// }
// console.log(charFrequency("hello"));

//12. Rempve Special Characters

// function removeSpecial(str)
// {
//     return str.replace(/[^a-zA-Z0-9] /g,'');
// }
// console.log(removeSpecial("Hello@# World!"));

//13. Find Longest Word

// function longesWord(str){
//     let words=str.split('');
//     let longest="";
//     for(let w of words){
//         if(w.length>longest.length) longest=w;
//     }
//     return longest;

// }
// console.log(longesWord("I love Javascript  Programming"));

//14. Revers Words in Sentence

// function reversWords(str){
//     return str.split('').reverse().join('');
// }

// console.log(reversWords("I love JS"))

//15. Check Substring Present 
// function hasSubstring(str, sub){
//     return str.includes(sub);
// }
// console.log(hasSubstring("JavaScript", "Script"));

//16. Capitalize First Letter of Each Words

// function capitalizeWord(str){
//     return str.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeWord("Hello word"));