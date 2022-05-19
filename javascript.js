//Functions for add, subtract, multiply, divide
const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = function(a, b, operator) {
    if (operator == 'add'){
        return add(a, b);
    } else if (operator == 'subtract'){
        return subtract(a, b);
    } else if (operator == 'multiply'){
        return multiply(a, b);
    } else if (operator == 'divide'){
        return divide(a, b);
    }
};