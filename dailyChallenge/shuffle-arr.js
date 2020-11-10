'use strict';

const restoreString = (s, indices) => {

  let result = '';
  let array = [];

  for (let i in s) {
    array.push('x');
  }

  let nIDX = 0;

  while (nIDX < array.length) {
    array[indices[nIDX]] = s[nIDX];
    nIDX++;
  }

  for (let char in array) {
    result += array[char];
  }

  return result;

};

module.exports = restoreString;

