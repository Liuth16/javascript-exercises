const palindromes = function (string) {
    const text = [...string];
    stringText = text.filter(char => {return !/[^a-zA-Z0-9]/.test(char);}).join('').toLowerCase();
    reversed = text.reverse();
    stringReversed = text.filter(char => {return !/[^a-zA-Z0-9]/.test(char);}).join('').toLowerCase();
    if (stringReversed === stringText){
      return true;
    } else {
      return false;
    }
};


// Alternative solution using array methods:

// const palindromes = function (string) {
//   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   const cleanString = string
//   .toLowerCase()
//   .split('')
//   .filter((char) => characters.includes(char))
//   .join('');

//   const reverseCleanString = cleanString.split('').reverse().join('');

//   return reverseCleanString === cleanString;

// };

// Do not edit below this line
module.exports = palindromes;
