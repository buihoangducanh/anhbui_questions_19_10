// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

//?? Example 1:
// Input: nums = [10,2]
// Output: "210"

//?? Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function largestNumber(arr) {
  arr.sort((a, b) => {
    const str1 = a.toString();
    const str2 = b.toString();
    return str2 + str1 - (str1 + str2);
  });
  if (arr[0] === 0) return "0"; // nếu số lớn nhất đứng đầu mảng là 0 thì trả ra số không là được
  return arr.join("");
}

console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
