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
