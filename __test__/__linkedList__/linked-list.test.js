'use strict';

const LinkedList = require('../../linkedList/linked-list').LinkedList;


describe('Linked List Implementation', () => {

  it('New should create an empty linked list upon instantiation', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
  });

  it('Insert should add the provided value to empty list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.value).toBe(1);
  });

  it('Insert should add to the beginning of a list that is not empty', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(10);
  });

  it('Append should add to the end of a list that is not empty', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.append(55);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(10);
    expect(ll.head.next.next.value).toBe(55);
  });

  it('Append should add to the a list that has no head by creating the head', () => {
    const ll = new LinkedList();
    ll.append(55);
    expect(ll.head.value).toBe(55);
  });

  it('InsertAfter should successfully insert a node after a node located in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(2, 22);
    let string = ll.toString();
    expect(string).toStrictEqual('{3} -> {2} -> {22} -> {1} -> NULL');
  });

  it('InsertAfter should successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(1, 22);
    let string = ll.toString();
    expect(string).toStrictEqual('{3} -> {2} -> {1} -> {22} -> NULL');
  });

  it('InsertBefore should successfully insert before a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.insert(22);
    ll.insert(39);
    ll.insert(70);
    ll.insert(95);
    ll.insertBefore(39, 50);

    let string = ll.toString();
    expect(string).toStrictEqual('{95} -> {70} -> {50} -> {39} -> {22} -> NULL');
  });

  it('InsertBefore should successfully insert a node before the first node of the linked list', () => {
    const ll = new LinkedList();
    ll.insert(2);
    ll.insert(1);
    ll.insertBefore(1, 11);
    let string = ll.toString();
    expect(string).toStrictEqual('{11} -> {1} -> {2} -> NULL');
  });

  it('Includes should return true if the node value exists in the list', () => {
    const ll = new LinkedList();
    ll.insert(25);
    ll.insert(50);
    expect(ll.includes(25)).toStrictEqual(true);
    expect(ll.includes(50)).toStrictEqual(true);
  });

  it('Includes should return false if no node values match input value', () => {
    const ll = new LinkedList();
    ll.insert(25);
    ll.insert(50);
    expect(ll.includes(99)).toBe(false);
  });

  it('String should return a string representing all values in the linked list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(5);
    ll.insert(10);
    ll.insert(11);
    ll.append(100);
    ll.append(200);
    let string = ll.toString();
    expect(string).toStrictEqual('{11} -> {10} -> {5} -> {2} -> {1} -> {100} -> {200} -> NULL');
  });

});
