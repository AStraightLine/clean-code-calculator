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

function percentOf(x) {
    if (x == 0) {
        return x;
    } else {
        let cent = x / 100;
        return cent;
    }
}

function unaryOp(x) {
    if (x < 0) {
        return Math.abs(x);
    } else if (x > 0) {
        return -Math.abs(x);
    } else if (x == 0) {
        return x;
    }
}

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
}