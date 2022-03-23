const calculateResult = (operand1, operand2, operator) => {
    if (operator === '+')
        return add(operand1, operand2);
    else if (operator === '-')
        return substract(operand1, operand2);
    else if (operator === '*')
        return multiply(operand1, operand2);
    else if (operator === '/')
        return divide(operand1, operand2);
    else if (operator === '%')
        return mod(operand1, operand2);
}

const add = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return (a - b);
}

const divide = (a, b) => {
    return (a / b);
}

const multiply = (a, b) => {
    return (a * b);
}

const mod = (a, b) => {
    return (a % b);
}

export default calculateResult;
export { add,substract, divide, multiply, mod };