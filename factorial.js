function factorial2(number2) {
  let result2 = 1;
  for (let first = 1; first !== number2 + 1; first += 1) {
    result2 *= first;
  } 
  return result2;
}

console.log(factorial2(1));     // => 1
console.log(factorial2(2));     // => 2
console.log(factorial2(3));     // => 6
console.log(factorial2(4));     // => 24
console.log(factorial2(5));     // => 120
console.log(factorial2(6));     // => 720
console.log(factorial2(7));     // => 5040
console.log(factorial2(8));     // => 40320

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

function factorial3(number3) {
  if (number3 === 1) {
    return 1;
  }

  return number3 * factorial3(number3 - 1);
}

console.log(factorial3(1));     // => 1
console.log(factorial3(2));     // => 2
console.log(factorial3(3));     // => 6
console.log(factorial3(4));     // => 24
console.log(factorial3(5));     // => 120
console.log(factorial3(6));     // => 720
console.log(factorial3(7));     // => 5040
console.log(factorial3(8));     // => 40320