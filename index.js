// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const increasingTriplet = function (nums) {
  let firstNumber = Infinity
  let secondNumber = Infinity
  let thirdNumber = Infinity
  let i = 0
  let isTriplet = false
  while (!isTriplet && i < nums.length) {
      if (nums[i] <= firstNumber) {
          firstNumber = nums[i]
      } else if (nums[i] <= secondNumber) {
          secondNumber = nums[i]
      }else if (nums[i] <= thirdNumber) {
          thirdNumber = nums[i]
      }
      if (firstNumber < secondNumber && secondNumber < thirdNumber && thirdNumber < Infinity) {
          isTriplet = true
      }
      i = i+1
  }

  return isTriplet
};
