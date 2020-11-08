'use strict';

// Given a square matrix, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

const diagonalSum = (mat) => {
  let sum = 0;
  let first = 0;
  let last = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {  
    if (first !== last) {
      sum += mat[i][first];
      sum += mat[i][last];
    } else {
      sum += mat[i][first];
    }

    first++;
    last--;
  }

  return sum;
};

module.exports = diagonalSum;
