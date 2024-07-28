const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
    console.log(total);
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++){
    total = total * numbers[i];
  }
  return total;
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
