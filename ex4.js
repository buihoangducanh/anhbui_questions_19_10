// K  closest element
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:
//todo |a - x| < |b - x|, or
//todo |a - x| == |b - x| and a < b

//?? Example 1:
//!! Input: arr = [1,2,3,4,5], k = 4, x = 3
//!! Output: [1,2,3,4]

//?? Example 2:
//! Input: arr = [1,2,3,4,5], k = 4, x = -1
//! Output: [1,2,3,4]

function kClosestElem(arr, k, x) {
  if (k === 0) return null;
  if (k > arr.length) return undefined;

  const resArr = [];
  const xPos = arr.indexOf(x);
  let distance = 1;
  while (k > 0) {
    if (xPos - distance >= 0) {
      resArr.push(arr[xPos - distance]);
      k--;
    }
    if (xPos + distance < arr.length) {
      resArr.push(arr[xPos + distance]);
      k--;
    }
    distance++;
  }
  return resArr.sort((a, b) => a - b);
}

console.log(kClosestElem([1, 2, 3, 4, 5], 4, 3));
console.log(kClosestElem([1, 2, 3, 4, 5], 4, -1));
