/**
 * Definition for singly-linked list.
 
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

const middleNode = (head) => {
  let count = 0;
  let headArr = [head];

  while (head.next !== null) {
    headArr.push(head.next);
    head = head.next;
  }

  let middle = Math.floor(headArr.length / 2);
  return headArr[middle];
};
