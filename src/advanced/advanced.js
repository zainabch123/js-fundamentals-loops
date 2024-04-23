const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = 1

for (let i = 0; i<nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true;
    console.log(i);
    break;
    } else {
      hasTen = false;
    }
}

console.log(hasTen);

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i<= nums.length; i++) {
  if (nums[i] % 3 == 0) {
    divisibleByThreeCount = divisibleByThreeCount + 1;
  }
}
  console.log(divisibleByThreeCount);

// 3. use a for loop to find the average of the numbers in the array
let average = 0
for (let i = 0; i< nums.length; i++) {
  average += nums[i];
}
average = average/nums.length;
console.log(average);

// 4. use a for loop to find the largest number in the array
let largest = 0
largestNum = 6

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largestNum) {
    largestNum = nums[i];
    largest = largestNum;
  }
}

console.log(largest);

// 5. use a for loop to find the smallest number in the array
let smallest = 100000

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i];
  }
}
console.log(smallest);

// 6. find the median of the numbers in the array
let median = 0
sortedNumsArray = [];
sortedNumsArray = nums.sort((a, b) => a - b);
console.log(sortedNumsArray);

if (sortedNumsArray.length % 2 === 0) {
  middleValue = sortedNumsArray.length / 2 - 1;
} else {
  middleValue = sortedNumsArray.length / 2;
}
console.log(middleValue);

median = sortedNumsArray[middleValue];
console.log(median);


module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
