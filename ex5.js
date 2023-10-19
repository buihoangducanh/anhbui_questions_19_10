// Find Second largest element in an array (Do not use sorting)
// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the
// array is 35 and the second
// largest element is 34

// Input: arr[] = {10, 5, 10}
// Output: The second largest element is 5.
// Explanation: The largest element of
// the array is 10 and the second
// largest element is 5

// Input: arr[] = {10, 10, 10}
// Output: The second largest does not exist.
// Explanation: Largest element of the array
// is 10 there is no second largest element

function findSecondLargest(arr) {
  let maxVal = Number.MIN_VALUE;
  for (let val of arr) {
    if (val > maxVal) {
      maxVal = val;
    }
  }
  let secondMaxVal = Number.MIN_VALUE;
  for (let val of arr) {
    if (val > secondMaxVal && val !== maxVal) {
      secondMaxVal = val;
    }
  }
  return secondMaxVal === Number.MIN_VALUE
    ? `Largest element of the array is ${maxVal} there is no second largest element`
    : `The largest element of the array is ${maxVal} and the second largest element is ${secondMaxVal}`;
}

console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));
console.log(findSecondLargest([10, 5, 10]));
console.log(findSecondLargest([10, 10, 10]));
