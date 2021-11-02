/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const p = head;
  console.log(p);
  // if(p) {

  // }
  while(head.next) {
    if(head.next.val == head.val) {
      // 将head.next的指针直接指向下一个, 相当于删除
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  } 
  return p;
};