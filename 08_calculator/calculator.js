const add = function(...values) {
	let sum = 0;
  for (let val in values){
    sum += values[val];
  }

  return sum;
};

const subtract = function(...values) {
	let difference = values[0];

  for (let val in values) {
    difference -= values[val];
  }

  difference += values[0];
  return difference;
};

const sum = function(array) {
	let sum_num = 0;
  let newArray = [...array];

  for (let val in newArray){

    sum_num += Number(newArray[val]);
  }

  return sum_num;
};

const multiply = function(valuesArray) {
  let newArray = [...valuesArray];
  let product = 1;

  for (let val in newArray) {
    product *= newArray[val];
  }

  return product;
};

const power = function(number, exponent) {
  
  return (number ** exponent);
  
};

const factorial = function() {
	
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
