
let firstOperand;
let secondOperand;
let currentOperator;
let nextOperator = null;
let shouldResetScreen = false; 

let previousOperandDisplay = document.querySelector('.previous-operand');
let currentOperandDisplay = document.querySelector('.current-operand');

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');


operationButtons.forEach((btn) =>
  btn.addEventListener('click', () => setOperation(btn.textContent))
)

const updateDisplay = function (numberButtons) {
    if (currentOperandDisplay.textContent === '0' || shouldResetScreen) {
        resetScreen()
    }
    currentOperandDisplay.textContent += numberButtons.value;
    //console.log(firstOperand);
} 


const setOperation = function (operator) {
    if(currentOperator != null) {
        evaluate();
    }

   firstOperand = currentOperandDisplay.textContent
    //operator = '+';
    currentOperator = operator;

    previousOperandDisplay.textContent = `${firstOperand} ${currentOperator}`;
    shouldResetScreen = true
    

    //console.log(firstOperand);
   // console.log(currentOperator);

}
  
const evaluate = function () {
    if(currentOperator === null || shouldResetScreen) return
    if(currentOperator === '/' && currentOperandDisplay.textContent === '0'){
    alert('you can\t divide by 0 loser')
    return
   }

    secondOperand = currentOperandDisplay.textContent;


    //console.log(secondOperand);
    currentOperandDisplay.textContent = operate(firstOperand, secondOperand, currentOperator);
    previousOperandDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(currentOperator);

    console.log(operate(7,0,'/'));
    console.log(operate(7,0,'÷'));

    console.log(operate(firstOperand,secondOperand,currentOperator));
}



const clear = function () {
    currentOperandDisplay.textContent = 0;
    previousOperandDisplay.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null; 
}

const resetScreen = function () {
    currentOperandDisplay.textContent = '';
    shouldResetScreen = false;
}


const add = function(a,b) {
	sum = +a + +b;
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
   if(b === 0 ) {
    return 'you can\'t divide by 0!';
   } else {
    quotient = a / b;
    return Math.round(quotient * 1000)/1000;
   } 
}
console.log(divide(1,900)); //.001



const operate = function (a, b, operator) { 

    if(operator === '+') {
        return add(a, b);
    } else if (operator === '-'){
        return subtract(a, b);
    } else if (operator === 'x'){
        return multiply(a, b);
    } else (operator === '÷')
        return divide(a, b); 
};

console.log(operate(7,0,'÷'))
console.log(operate(2,2,'+'));
console.log(operate(2,2,'-'));
console.log(operate(2,2,'x'));
console.log(operate(2,2,'÷'));


equalsButton.addEventListener('click', evaluate);
allClearButton.addEventListener('click', clear);

