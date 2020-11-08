'use strict';

const TreeNode = require('../trees/binarytree.js').TreeNode;
const BinarySearchTree = require('../trees/bst.js');

// [-10, -9, -7, -3, 0, 5, 9, 12, 13, 17, 20]

const arrayToBST = (arr) => {

  // find mid index of array
  let mid = Math.floor(arr.length / 2);
  let spliced = arr.splice(mid, 1);
  let rootVal = spliced.pop();

  let firstHalf = arr.splice(0, mid);
  let secondHalf = arr;
  console.log('1st Half:', firstHalf);
  console.log('2nd Half:', secondHalf);

  // create a root node with the value of the element at middle index
  let root = new TreeNode(rootVal);

  // instantiate new BST with that root node
  let BST = new BinarySearchTree(root);

  // helper function adds values to BST in proper place
  // function _add(val) {

  // }

  // call helper function on every array element
  // for (let val of arr) {
  //   console.log('VAL:', val);
  //   _add(val);
  // }

  // return constructed Binary Search Tree
  return BST;

};

module.exports = arrayToBST;
