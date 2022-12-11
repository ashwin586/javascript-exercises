const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(num) {
  return num.reduce((total, current) => total + current, 0);
};


const multiply = function(array) {
 return array,length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let n = 1;
  if (num ==0 || num ==1) {
    return n;
  } else {
    for (let i=0; i>=1; i--) {
      n = n*i;
    }
    return n;
  }
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
