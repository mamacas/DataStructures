'use strict';

// 10/20/20

// a robot starts at position [0,0] on a 2-dimensional plane.
// given a string of letters representing directions-
// ('URLDRL') represents up, right, left, down, right, left-
// determine if the robot ends up back at position [0,0]

var judgeCircle = function(moves) {

  let dir = {
    U: 0,
    R: 0,
    D: 0,
    L: 0
  };

  for (let char of moves) {
    dir[char] ++;
  }

  if (dir['U'] === dir['D'] && dir['R'] === dir['L']) {
    return true;
  }

  return false;

};

module.exports = judgeCircle;
