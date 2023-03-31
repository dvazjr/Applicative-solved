/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

const people = [
  { name: "John", age: 33 },
  { name: "Leslie", age: 65 },
  { name: "Hallee", age: 51 },
  { name: "Ben", age: 18 },
];

export function minBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }
  let minElem = array[0];
  let minValue = cb(minElem);
  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i]);
    if (value < minValue) {
      minElem = array[i];
      minValue = value;
    }
  }
  return minElem;
}

export function maxBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }
  let maxElem = array[0];
  let maxValue = cb(maxElem);
  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i]);
    if (value > maxValue) {
      maxElem = array[i];
      maxValue = value;
    }
  }
  return maxElem;
}

const getAge = (person) => person.age;

const youngestPerson = minBy(people, getAge);
console.log(youngestPerson);

const oldestPerson = maxBy(people, getAge);
console.log(oldestPerson);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
