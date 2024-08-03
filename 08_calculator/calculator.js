const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((total, currentItem) => total+currentItem, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentItem) => total*currentItem, 1)
};

const power = function(number, expoent) {
	return number ** expoent;
};

const factorial = function(number) {
  let fact = 1;
	for (let i = 1; i <= number; i++){
    fact = fact*i;
  }
  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
