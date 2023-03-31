import { data } from "../data/data";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * 1)
 * Return example: 1902
 */
export function getGreatestDiscoveryYear(array) {
  const discoveries = data.asteroids.map((asteroid) => asteroid.discoveryYear);

  function mostFrequentNumber(numbers) {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequentNumber;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      frequency[number] = (frequency[number] || 0) + 1;

      if (frequency[number] > maxFrequency) {
        maxFrequency = frequency[number];
        mostFrequentNumber = number;
      }
    }

    return mostFrequentNumber;
  }
  return mostFrequentNumber(discoveries);
}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
