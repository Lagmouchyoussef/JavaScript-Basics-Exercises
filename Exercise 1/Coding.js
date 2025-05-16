// Exercise 1: Basic Calculator
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Results:
Sum: ${num1} + ${num2} = ${sum}
Difference: ${num1} - ${num2} = ${difference}
Product: ${num1} * ${num2} = ${product}
Quotient: ${num1} / ${num2} = ${quotient}`);