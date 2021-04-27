// The basic maths functions:
function addition(a, b) {
    let sum = a + b;
    return sum;
}

function subtraction(a, b) {
    let difference = a - b;
    return difference;
}

function multiplication(a, b) {
    let product = a * b;
    return product;
}

function division(a, b) {
    if (b == 0) {
        return "Don't";
    } else {
        let quotient = a / b;
        return quotient;
    } 
}

// One percent of entered number for user use in subsequent calculations.
function percentOf(x) {
    if (x == 0) {
        return x;
    } else {
        let cent = x / 100;
        return cent;
    }
}

// Change a negative number to a positive number, or positive number to a negative number.
function unaryOp(x) {
    if (x < 0) {
        return Math.abs(x);
    } else if (x > 0) {
        return -Math.abs(x);
    } else if (x == 0) {
        return x;
    }
}

// The last stage of operatorEvent handling, when a decision as has been made as which operation to execute on
// which operands.
function operate(a, operator, b) {

    a = parseFloat(a);
    b = parseFloat(b);

    let result = '';

    switch(operator) {
        case '+': 
            result = addition(a, b);
            result = result.toString();
            break;
        case '-':
            result = subtraction(a, b);
            result = result.toString();
            break;
        case '*':
            result = multiplication(a, b);
            result = result.toString();
            break;
        case '/': 
            result = division(a, b);
            result = result.toString();
            break;
        case '%':
            result = percentOf(a);
            result = result.toString();
            break;
        case "unary":
            result = unaryOp(a);
            result = result.toString();
            break;

        case ".": 
            result = displayValue += '.';
            result = result.toString();
            break;
    }
    return adjustResultLength(result);
}
// Check the length of result:
//    IF:
//        It's over max length as an Int, its too long, nothing we can do, display NaN;
//        Otherwise if its over the max length as a float, we can round accordingly:
//                 Loop checking the last digit and rounding before popping the last digit until in 
//                 desired length range.
function adjustResultLength(result) {
    if ((((parseInt(result)).toString()).length) >= 10) {
        return "NaN";
    } else if (result.length >= 10) {
        let resultString = result.toString();
        let resultArray = resultString.split('');
        while (resultArray.length > 10) {
            if (resultArray[(resultArray.length - 1)] >= 5) {
                resultArray[(resultArray.length - 1)] = Math.round(resultArray[(resultArray.length - 1)]);
                resultArray.pop();
            } else {
                resultArray.pop();
            }
        }
        result = resultArray.join('');
        return result;
    } else {
        return result;
    } 
}

// Remove the last digit from the display if there is more than one, else effectively remove the last digit by resetting it to 0
function backspace() {
    displayArray = displayValue.split('');
    if (displayArray.length > 1) {
        displayArray.pop();
    } else {
        displayArray[0] = 0;
    }
    displayValue = displayArray.join('');
    display.textContent = displayValue;
}

function decimalHandler(currentOperatorPress) {
    if (displayValue.includes('.')) {
        return;
    }
    displayValue = operate(displayValue, currentOperatorPress);
    display.textContent = displayValue;
}

function unaryHandler(currentOperatorPress) {
    if (lastOperator == '=') {
        displayValue = operate(operandA, currentOperatorPress);
        display.textContent = displayValue;
    } else {
        displayValue = operate(displayValue, currentOperatorPress);
        display.textContent = displayValue;
    }
}

function centHandler(currentOperatorPress) {
    displayValue = operate(displayValue, currentOperatorPress);
    display.textContent = displayValue;
}

function equalsHandler(currentOperatorPress) {
    // Check if the user has only entered one number and then hit equals:
    if (lastOperator === '' || lastInputWasOperation) {
        return;
    } else {
        operandB = displayValue;
        subDisplay.textContent = operandA + ' ' + lastOperator + ' ' + operandB + ' ' + currentOperatorPress;
        result = operate(operandA, lastOperator, operandB);
        display.textContent = result;
        lastOperator = currentOperatorPress;
        operandA = result;
        displayValue = '0';
    }
    lastInputWasOperation = true;
}


function additionHandler(currentOperatorPress) {
    operandB = displayValue;
    subDisplay.textContent = operandB + ' ' + currentOperatorPress;
    result = operate(operandA, currentOperatorPress, operandB);
    display.textContent = result;
    lastOperator = currentOperatorPress;
    operandA = result;
    subDisplay.textContent = result + ' ' + currentOperatorPress;
    displayValue = '0';
    lastInputWasOperation = true;
}

function subtractionHandler(currentOperatorPress) {
    // check if last operator was empty, if so switch a and b
    // also check if displayValue is positive or negative, do we have to reswitch them if they are? 0 10 - vs 0 -10 -
}

// First stage of operation event handling: 
function operationEventHandler(currentOperatorPress) {
    // Operations we can carry out regardless of what the last input or operation was.
    switch(currentOperatorPress) {
        case 'backspace':
            backspace();
            break;
        case '.':
            decimalHandler(currentOperatorPress);
            break;
        case 'unary':
            unaryHandler(currentOperatorPress);
            break;
        case '%':
            centHandler(currentOperatorPress);
            break;
        case '=':
            equalsHandler(currentOperatorPress);
            break;
        case '+':
            additionHandler(currentOperatorPress);
            break;
        case '-':
            subtractionHandler(currentOperatorPress);
            break;
    }
}

const display = document.querySelector('#calcDisplay');
const subDisplay = document.querySelector('#calcSubDisplay');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clearButton');

let currentOperatorPress = '';
let lastInputWasOperation = false;

let displayValue = '0';
let operator = '';
let lastOperator = '';
let operandA = 0;
let operandB = 0;
let result = 0;

display.textContent = displayValue;

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentOperatorPress = button.value;
        operationEventHandler(currentOperatorPress);
    });
});

// Max display length of 10 cancel the operation if at this max.
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {        
        if ((displayValue.length) == 10) {
            // a number was still the last input, but make no change to that number.
            operandB = displayValue;
            lastInputWasOperation = false;
            return;
        } else {
            if (displayValue == '0') {
                displayValue = button.value;
                display.textContent = displayValue;
            } else {
                displayValue += button.value;
                display.textContent = displayValue;
            }
        }
        // The last thing pressed was a number not an operator so:
        lastInputWasOperation = false;
    });
});

// Clean reset of everything. 
clearButton.addEventListener('click', () => {
    displayValue = '0';
    operator = '';
    lastOperator = '';
    currentOperatorPress = '';
    lastInputWasOperation = false;
    operandA = 0;
    operandB = 0;
    result = 0;
    subDisplay.textContent = '';
    display.textContent = displayValue;
});