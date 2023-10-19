// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

//?? Example 1:
// Input: nums = [10,2]
// Output: "210"

//?? Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function transformToListOfSingleDigitNumbers(number) {
  const myArray = [];
  while (number !== 0) {
    let elem = number % 10;
    number = Math.floor(number / 10);
    myArray.push(elem);
  }

  return myArray;
}

function largestNumber(arr) {
  let myArray = [];
  for (const elem of arr) {
    myArray = [...myArray, ...transformToListOfSingleDigitNumbers(elem)];
  }
  myArray.sort((a, b) => b - a);
  return myArray.join("");
}

console.log(largestNumber([10, 2]));
console.log(largestNumber([3,30,34,5,9]));
