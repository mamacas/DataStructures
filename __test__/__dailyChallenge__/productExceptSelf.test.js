'use strict';

const productExceptSelf = require('../../dailyChallenge/productExceptSelf-arr.js');

describe('Product of Array Except Self', () => {

  it('should return a new array containing products of all array elements except itself', () => {

    let nums = [1, 2, 3, 4];
    expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6]);
  });

});

