'use strict';

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

const numJewelsInStones = (J, S) => {

  // SOLVED WITH NESTED FOR LOOPS:

  let tally = 0;

  for (let jewel of J) {
    for (let stone of S) {
      if (jewel === stone) {
        tally ++;
      }
    }
  }

  return tally;

  // SOLVED WITH A DICTIONARY:

  // let obj = {};

  // for (let jewel of J) {
  //   obj[jewel] = 0;
  // }

  // for (let stone of S) {
  //   if (typeof obj[stone] === 'number') {
  //     obj[stone] += 1;
  //   }
  // }

  // let tally = Object.values(obj).reduce((a, b) => a + b)

  // return tally;

};

module.exports = numJewelsInStones;
