'use strict';

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  // root, left, right
  preOrder() {

    const arr = [];

    function _preOrder(root) {

      if (!root) {
        return;
      }

      arr.push(root.value);

      if (root.left) {
        _preOrder(root.left);
      }

      if (root.right) {
        _preOrder(root.right);
      }

    }

    _preOrder(this.root);
    return arr;

  }


  // left, root, right
  inOrder() {

    const arr = [];

    function _inOrder(root) {

      if(!root) {
        return;
      }

      if (root.left) {
        _inOrder(root.left);
      }

      arr.push(root.value);

      if (root.right) {
        _inOrder(root.right);
      }

    }

    _inOrder(this.root);
    return arr;

  }

  // left, right, root
  postOrder() {

    const arr = [];

    function _postOrder(root) {

      if (!root) {
        return;
      }

      if (root.left) {
        _postOrder(root.left);
      }

      if (root.right) {
        _postOrder(root.right);
      }

      arr.push(root.value);

    }

    _postOrder(this.root);
    return arr;

  }

}

module.exports = { TreeNode, BinaryTree };
