function numberRange (number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
    return;
  } if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
    return;
  } if (number > 100) {
    console.log(`${number} is greater than 100`);
    return;
  } else {
    console.log(`${number} is less than 0`);
    return;
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);