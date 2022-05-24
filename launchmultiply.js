function getNumber (prompt) {
  let readlineSync = require('readline-sync');
  let number = Number(readlineSync.question(prompt));
  return number;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ')

function product (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(`${firstNumber} * ${secondNumber} = ${product(firstNumber, secondNumber)}`)