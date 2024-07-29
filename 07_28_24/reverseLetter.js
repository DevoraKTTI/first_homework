//Instructions: Given an input string l, reverse the order of the letters.
//A letters is defined as a sequence of non-space characters. The letters in l will not be separated by any space.
//Return a string of letters in reverse order.

let reverseLetter = function(l){
    return(l.trim().split("").reverse().join(""))
}

console.log(reverseLetter('please') );
console.log(reverseLetter('  word  ') ); 
console.log(reverseLetter('hannah') );
console.log(reverseLetter('what happens when I reverse a palindrome?') );