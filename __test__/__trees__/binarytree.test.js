'use strict';

const TreeNode = require('../../trees/binarytree.js').TreeNode;
const BinaryTree = require('../../trees/binarytree.js').BinaryTree;

describe('Binary Tree Implementation', () => {

  it('New can instantiate an empty tree', () => {
    const tree = new BinaryTree();

    const result1 = tree.preOrder();
    const result2 = tree.inOrder();
    const result3 = tree.postOrder();
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
    expect(result3).toEqual([]);
  });

  it('New can instantiate a tree with a single root node', () => {
    const one = new TreeNode(1);

    const tree = new BinaryTree(one);

    const result = tree.preOrder();
    expect(result).toEqual([1]);
  });

  it('PreOrder should return a collection from a preorder traversal', () => {
    const one = new TreeNode(1);
    const ten = new TreeNode(10);
    const three = new TreeNode(3, one, ten);

    const tree = new BinaryTree(three);

    const results = tree.preOrder();
    expect(results).toEqual([3, 1, 10]);
  });

  it('InOrder should return a collection from an inorder traversal', () => {
    const one = new TreeNode(1);
    const ten = new TreeNode(10);
    const three = new TreeNode(3, one, ten);

    const tree = new BinaryTree(three);

    const results = tree.inOrder();
    expect(results).toEqual([1, 3, 10]);
  });

  it('PostOrder should return a collection from a postorder traversal', () => {
    const one = new TreeNode(1);
    const ten = new TreeNode(10);
    const three = new TreeNode(3, one, ten);

    const tree = new BinaryTree(three);

    const results = tree.postOrder();
    expect(results).toEqual([1, 10, 3]);
  });


});

