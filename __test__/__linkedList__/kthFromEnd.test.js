'use strict';

const LinkedList = require('../../linkedList/linked-list.js').LinkedList;
const kthFromEnd = require('../../linkedList/kthFromEnd-ll.js');

describe('Kth From End of Linked List', () => {

  it('should return the value of the node at the kth position from the end of the list', () => {
    const ll = new LinkedList();
    ll.insert(2);
    ll.insert(1);
    ll.insert(5);
    ll.insert(10);
    ll.insert(4);
    ll.insert(8);
    // k is somewhere in list
    expect(kthFromEnd(ll, 3)).toStrictEqual(10);
    // k is last node in list
    expect(kthFromEnd(ll, 0)).toStrictEqual(2);
    // k is first node in list
    expect(kthFromEnd(ll, 5)).toStrictEqual(8);
    // k is greater than list length
    expect(kthFromEnd(ll, 10)).toStrictEqual('exception');
    // k is negative integer
    expect(kthFromEnd(ll, -2)).toStrictEqual('exception');
    // k = list length
    expect(kthFromEnd(ll, 6)).toStrictEqual('exception');
  });

  it('should return the value of the node at the kth position from the end of the list when the list length is 1', () => {
    const ll = new LinkedList();
    ll.insert(2);
    expect(kthFromEnd(ll, 0)).toStrictEqual(2);
    expect(kthFromEnd(ll, 1)).toStrictEqual('exception');
  });

});
