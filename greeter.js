let greeted = 'Victor'
console.log(`Good Morning, ${greeted}.`)
console.log(`Good Afternoon, ${greeted}.`)
console.log(`Good Evening, ${greeted}.`)


let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question('What is your last name?\n');

console.log(`Hello, ${firstName + ' ' + lastName}!`)

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName2 = getName('What is your first name? ');
let lastName2 = getName('What is your last name? ');
console.log(`Hello, ${firstName2} ${lastName2}!`);