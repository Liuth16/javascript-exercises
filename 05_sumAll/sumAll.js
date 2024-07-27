const sumAll = function(initial, final) {
    let total = 0;
    if(typeof initial !== 'number'|| typeof final !== 'number'){
      return "ERROR";
    }

    else if (initial < 0 || final <0){
      return "ERROR";
    }
    else {
      if (initial > final){
        temp = initial
        initial = final;
        final = temp;
        console.log(initial, final)
      }

      for (initial; initial <= final; initial++){
          total += initial;
      }
      return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
