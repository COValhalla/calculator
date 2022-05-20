//Functions for add, subtract, multiply, divide
const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => {
    if (b == 0) {
        return 'Cannot divide by 0!'
    } else {
        return a / b;
    }
});

//Text based input call to the main four functions that avoids eval();
const operate = function (a, b, operator) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == 'x') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
};

//Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

//Function for storing button value in a variable
let firstOperand;
let secondOperand;
let operator;
let calcObj = {
    firstVal: '',
    operator: '',
    secondVal: '',
};

let operatorsArray = ['+', '-', 'x', '/']

document.querySelectorAll('button').forEach(node =>
    node.addEventListener('click', () => {
        //Clear calcObj & display
        if (node.textContent == 'clear') {
            calcObj.firstVal = '';
            calcObj.operator = '';
            calcObj.secondVal = '';
            document.querySelector('p').textContent = '';
        }
        //Update firstVal and initial operator
        else if (calcObj.operator == '') {
            if (+node.textContent <= 9) {//If number press, add to firstVal
                calcObj.firstVal = calcObj.firstVal + node.textContent;
            } else if (Boolean(calcObj.firstVal) && operatorsArray.includes(node.textContent)) {
                calcObj.operator = node.textContent;
            };   
        //Update operator if changes before inputting 2nd number sequence 
        } else if (Boolean(calcObj.firstVal) && calcObj.operator != '' &&
            operatorsArray.includes(node.textContent) && calcObj.secondVal == '') {
            calcObj.operator = node.textContent;
        //Update secondVal
        } else if (Boolean(calcObj.firstVal) && calcObj.operator != '' &&
            node.textContent != '=' && +node.textContent <= 9) {
            calcObj.secondVal = calcObj.secondVal + node.textContent;
        //Output result on '+, -, /, x' press store result in calcObj.firstVal
        } else if (Boolean(calcObj.firstVal) && operatorsArray.includes(calcObj.operator) &&
            Boolean(calcObj.secondVal) && (node.textContent == '=' || operatorsArray.includes(node.textContent))) {
            
            //Calculate current math function and move result into firstVal for next function
            let results = operate(+calcObj.firstVal, +calcObj.secondVal, calcObj.operator);
            document.querySelector('p').textContent = results;
            calcObj.firstVal = results;
            calcObj.secondVal = '';
            //Store next operator if present on click
            if (operatorsArray.includes(node.textContent)) {
                calcObj.operator = node.textContent;
            }
        }
    })
);

//Keydown logic for pressing buttons. The '=' and '+' have text logic since they return the same keyCode
keyArray = [27, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 88, 189, 191]
const keyMap = function (e){
    if (e.key === '=' || e.key === 'Enter') {
        document.getElementById('61').click();
    } else if (e.key === '+'){
        document.getElementById('107').click();
    } else if(keyArray.includes(e.keyCode)){
        document.getElementById(`${e.keyCode}`).click();
        console.log(e.key)
    };
}
document.addEventListener('keydown', keyMap);
 
//Logic for updating display based on calcObj.firstVal (how to align with results)
