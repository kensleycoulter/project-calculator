
const add = function(a,b) {
	sum = a + b;
    return Math.round(sum * 1000)/1000;
};
console.log(add(2.3459,.2)); //2.546

const subtract = function(a,b) {
	difference = a - b;
    return Math.round(difference * 1000)/1000;
};
console.log(subtract(1,.0008)); //.999

const multiply = function(a,b) {
    product = a * b;
    return Math.round(product * 1000)/1000;
  };
console.log(multiply(2.78459,1.74934)); //4.871

const divide = function(a,b) {
   if(b === 0) {
    return 'you can\'t divide by 0!';
   } else {
    quotient = a / b;
    return Math.round(quotient * 1000)/1000;
   } 
}
console.log(divide(1,900)); //.001

