const fibonacci = function(position) {
    position = Number(position);
    let firstNum = 1;
    let secondNum = 0;
    let currentNum = 0;
    if (position < 0){
      return "OOPS";
    } else if (position === 1){
      return 1;
    } else{
      for (let i = 2; i <= position; i++){
      currentNum = firstNum + secondNum;
      secondNum =firstNum;
      firstNum = currentNum;
    }
    return currentNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
