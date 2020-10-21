'use strict';

const TreeNode = require('./binarytree.js').TreeNode;
const BinaryTree = require('./binarytree.js').BinaryTree;

class BinarySearchTree extends BinaryTree {

  add(value) {

    let newNode = new TreeNode(value);
    let current = this.root;

    while(current) {

      if (newNode.value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      } else if (newNode.value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }

    }

  }

  contains(value) {

    let current = this.root;

    while (current) {

      if (value === current.value) {
        return true;
      }

      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }

    }

  }

}

module.exports = BinarySearchTree;
