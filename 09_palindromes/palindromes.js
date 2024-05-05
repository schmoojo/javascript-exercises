const palindromes = function (string) {
   const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

   let cleanString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    let reverseString = cleanString
        .split('')
        .reverse()
        .join('');    
    
    
    // let arr = Array.from(string);
    // arr.revert;
    // let palindrome =  arr.reduce((word,letter)=> word + letter,'');


     return (reverseString === cleanString);
};

// Do not edit below this line
module.exports = palindromes;
