'use strict';

const restoreString = require('../../dailyChallenge/shuffle-arr.js');

describe('Unscramble String with Array', () => {

  it('should unscramble the string using array indices', () => {
    let string = 'codeleet';
    let arr = [4, 5, 6, 7, 0, 2, 1, 3];
    expect(restoreString(string, arr)).toEqual('leetcode');
  });

});

