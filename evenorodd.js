let rlSync = require('readline-sync');

let int;

for (int = Number(rlSync.question('Enter an integer: ')); Number.isInteger(int) === false; int = Number(rlSync.question('Enter a integer: '))) {
  console.log('Sorry, the value you entered is not an integer, try again');
}

function evenOrOdd(int) {
  if (int % 2 === 0) {
    console.log(`The number ${int} is even.`);
  } else {
    console.log(`The number ${int} is odd.`);
  }
}

console.log(evenOrOdd(int));