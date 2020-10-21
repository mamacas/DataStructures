'use strict';

const twoSum = require('../../dailyChallenge/twoSum-arr.js');

describe('Two Sum Challenge', () => {

  it('should return the proper indeces when both index values are different integers', () => {
    let arr = [1, 2, 3, 5, 8, 9];
    let result = twoSum(arr, 7);
    expect(result).toEqual([1, 3]);
  });

  it('should return the proper indeces when both index values are the same integer', () => {
    let arr = [3, 7, 9, 4, 3];
    let result = twoSum(arr, 6);
    expect(result).toEqual([0, 4]);
  });

  it('should not accept the same array element twice', () => {
    let arr = [2, 1, 3, 4, 5];
    let result = twoSum(arr, 4);
    expect(result).toEqual([1, 2]);
  });

});
