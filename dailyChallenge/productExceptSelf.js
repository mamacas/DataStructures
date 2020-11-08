'use strict';

const productExceptSelf = (nums) => {
  let result = [];
  let product = 0;

  for (let i = 0; i < nums.length; i++) {
    product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }

  return result;

};

module.exports = productExceptSelf;
