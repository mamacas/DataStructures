'use strict';

// 10/18/2020

const kthFromEnd = (list, k) => {
  let currentNode = list.head;
  let length = 0;

  while(currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  let position = length - k;

  if (length <= k || k < 0 || position === 0) {
    return 'exception';
  }

  // if k is < list length:
  let current = list.head;
  for (let i = 1; i < position; i++) {
    current = current.next;
  }

  return current.value;

};

module.exports = kthFromEnd;
