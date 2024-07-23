const removeFromArray = function(arrayObject, ...remove) {
    const trueArray = Array.from(arrayObject);
    for (const element of remove){
        let index = trueArray.indexOf(element);
        while (index > -1){
          trueArray.splice(index,1);
          index = trueArray.indexOf(element);
        }
    }
    return trueArray;
};

// Do not edit below this line
module.exports = removeFromArray;
