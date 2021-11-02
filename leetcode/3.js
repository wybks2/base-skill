var hasCycle = function (head) {
  const muster = [];
  while (head) {
    if(muster.indexOf(head)>-1) {
      return true;
    }
    muster.push(head);
    // 存入数组
    head = head.next;
  }
  return false
};
//
//
// hash表
// 堆栈问题
var hasCycle = function (head) {
  const muster = {};
  while (head) {
    if(muster[head]) {
      //console.log(muster[head]);
      return true;
    }
    muster[head] = 1;
    //console.log(muster[head]);
    // 存入数组
    head = head.next;
  }
  return false
};


var hasCycle = function (head) {
  const muster = {};
  while (head) {
    if(head.tag) {
      //console.log(muster[head]);
      return true;
    }
    head.tag = true;
    //console.log(muster[head]);
    // 存入数组
    head = head.next;
  }
  return false
};
// 
var hasCycle = function(head) {
  try {
      JSON.stringify(head)
      return false
  } catch {
      return true
  }
};

