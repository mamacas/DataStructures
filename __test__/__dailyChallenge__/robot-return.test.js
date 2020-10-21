'use strict';

const judgeCircle = require('../../dailyChallenge/robot-return.js');

describe('Robot Return Challenge', () => {

  it('should return true if U & D occur the same number of times and if R & L occur the same number of times', () => {
    let result = judgeCircle('URLD');
    expect(result).toBe(true);
  });

  it('should return false if the robot does not end at position [0,0]', () => {
    let result = judgeCircle('URLDDDRRL');
    expect(result).toBe(false);
  });

});
