let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
})

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray2.length; i += 1) {
  for (let j = 0; j < myArray2[i].length; j += 1) {
    let inner = myArray2[i][j];
  if (inner % 2 === 0) {
    console.log(inner);
  }
  }
}

myArray2.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

let newArray2 = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray2.push('even');
  } else {
    newArray2.push('odd');
  }
}

console.log(newArray);
console.log(newArray2); 

function findIntegers(array) {
  let newArray = array.filter(index => Number.isInteger(index) === true);
  return newArray;
}

function findIntegers2(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

let array4 = [3, 5, 7];
let array5 = array4.map(num => num * num);
let sum5 = array5.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum5); // => 83

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function oddLengths(array) {
  let newArray = array.map(index => index.length);
  let thirdArray = newArray.filter(num => num % 2 !== 0);
  return thirdArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/

const oddLengths2 = arr.reduce((array, index) => {
  if (index.length % 2 === 1) {
    const len = index.length;
    array.push(len);
  }
  return array;
}, []);

console.log(oddLengths2);