const add = function(num1, num2) {
  if(!Number.isInteger(num1) || !Number.isInteger(num2) ){
    return 'ERROR';
}
    return num1 + num2 ;
	
};

const subtract = function(num1, num2) {
  if(!Number.isInteger(num1) || !Number.isInteger(num2) ){
    return 'ERROR';
}
    return num1 - num2 ;
	
};

const sum = function(num) {
  num= typeof num != 'undefined'? num: 0;
  
  var sumOfNumber=0;
  for (let i=0; i< num.length; i++){
  	sumOfNumber += num[i];
  }
  return sumOfNumber;

};
	

const multiply = function(num) {
  num= typeof num != 'undefined'? num: 0;
  
  var multiplyOfNumber=1;
  for (let i=0; i<= num.length-1; i++){
  	multiplyOfNumber *= num[i];
  }
  return multiplyOfNumber;

};

const power = function(base, power) {
    return Math.pow(base, power);
	
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }
  else{
    return num *factorial( num-1);
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
