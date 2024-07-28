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

// Do not edit below this line
module.exports = palindromes;
