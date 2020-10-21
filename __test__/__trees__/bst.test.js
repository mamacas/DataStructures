'use strict';

const TreeNode = require('../../trees/binarytree.js').TreeNode;
const BinarySearchTree = require('../../trees/bst.js');

describe('Binary Search Tree Implementation', () => {

  it('Add should add a new Tree Node in the proper place within the Binary Search Tree', () => {
    let nN = new TreeNode(40);
    let bst = new BinarySearchTree(nN);

    bst.add(45);
    bst.add(50);
    bst.add(27);
    bst.add(20);

    expect(bst.root.value).toBe(40);
    expect(bst.root.left.value).toBe(27);
    expect(bst.root.left.left.value).toBe(20);
    expect(bst.root.right.value).toBe(45);
    expect(bst.root.right.right.value).toBe(50);
  });

  it('Contains should return a boolean indicating whether the provided value is in the Tree at least once', () => {
    let nN = new TreeNode(40);
    let bst = new BinarySearchTree(nN);

    bst.add(45);
    bst.add(50);
    bst.add(27);

    expect(bst.contains(40)).toBe(true);
    expect(bst.contains(45)).toBe(true);
    expect(bst.contains(50)).toBe(true);
    expect(bst.contains(27)).toBe(true);

    expect(bst.contains(39)).toBe(false);
    expect(bst.contains(42)).toBe(false);


  });

});

