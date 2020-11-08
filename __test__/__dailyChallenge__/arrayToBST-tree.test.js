'use strict';

// const TreeNode = require('../../trees/binarytree.js').TreeNode;
const arrayToBST = require('../../dailyChallenge/arrayToBST-tree.js');
// const BinarySearchTree = require('../../trees/bst.js');

describe('Array To BST Challenge', () => {

  it('ArrayToBST should add array values to the Binary Search Tree in their proper places', () => {
    let arr = [-10, -9, -7, -3, 0, 5, 9, 12, 13, 17, 20];

    let result = arrayToBST(arr);

    expect(result.root.value).toBe(5);
    // expect(result.root.left.value).toBe(-3);
    // expect(result.root.left.left.value).toBe(-10);
    // expect(result.root.right.value).toBe(5);
    // expect(result.root.right.right.value).toBe(9);
  });


});
