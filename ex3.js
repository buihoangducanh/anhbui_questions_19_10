// Single number
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

function singleNumber(arr) {
  const myArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < myArr.length; i += 3) {
    if (arr[i] !== arr[i + 2]) {
      return arr[i];
    }
  }
  return null;
}

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
