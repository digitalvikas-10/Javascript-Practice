// question 1. Count vowels in a string.


let string = "VIkas";

let count = 0;

for (let i = 0; i < string.length; i++) {
    
 if(string[i] ==='a'|| string[i] ==='e' || string[i] ==='i' || string[i] ==='o' || string[i] ==='u'){
        count++;
    }
     else if(string[i] ==='A'|| string[i] ==='E' || string[i] ==='I' || string[i] ==='O' || string[i] ==='U'){
        count++;
    } 
    //  else{
    //     console.log("No vowels are present in the string")
    // }
    
}

console.log(count);

// question 2.Find the longest word in a sentence.

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
for (const word of words) {
    if(words.length > longest.length){
        longest = word;
    } 
}
return longest;
}

console.log(longestWord(" i am a developer"))

// question 3. Check if two strings are anagrams.


function Anagram(str1 , str2){
    let string1 = str1.split("").sort().join("");
    let string2 = str2.split("").sort().join("");
    if(string1 ===string2){
        return true;
    }else{
        return false;
    }
}

console.log(Anagram("listen","silent"));