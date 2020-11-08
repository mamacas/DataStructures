'use strict';

const diagonalSum = require('../../dailyChallenge/diagonalSum.js');

describe('Matrix Diagonal Sum', () => {

  it('should accurately sum diagonal values in a square matrix, counting the middle element only once', () => {
    let input1 = [[1,2,3], [4,5,6], [7,8,9]];
    expect(diagonalSum(input1)).toEqual(25);

    let input2 = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]];
    expect(diagonalSum(input2)).toEqual(8);
  });

});
