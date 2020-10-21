'use strict';

// 10/19/2020

// given an array of integers and a target integer,
// return the two indeces in the array whose sum equals the target
// i.e. [1, 4, 2, 6, 7], 9
// returns [2, 4]

const twoSum = function(nums, target) {

  let result = [];
  let count = 0;

  while (count < nums.length) {

    result.push(count);

    for (let i = result[0] + 1; i < nums.length; i++) {
      if (nums[result[0]] + nums[i] === target) {
        result.push(i);
        return result;
      }
    }

    result.pop();
    count++;
  }

};

module.exports = twoSum;

