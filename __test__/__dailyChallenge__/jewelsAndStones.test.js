'use strict';

const numJewelsInStones = require('../../dailyChallenge/jewelsAndStones-str.js');

describe('Jewels in Stones Challenge', () => {

  it('should return an integer representing the number of jewels you have in a pile of stones', () => {
    let J = 'aAB';
    let S = 'aAAbbbB';
    expect(numJewelsInStones(J, S)).toEqual(4);
  });

});
