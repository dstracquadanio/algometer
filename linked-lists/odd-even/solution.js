const oddEvenList = (head) => {
  if (!head) return null;

  let odd = head,
    even = head.next,
    evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;

    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};