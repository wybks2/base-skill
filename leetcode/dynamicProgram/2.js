/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) {
    return nums;
  }
  // 存储第一个数
  const ans = nums[0];
  const num = 0;
  for (let i = 0; i < nums.length; i++) {
    if(num > 0) {
      num += nums[i]
    } else {
      num = nums[i]
    }
    ans = Math.max(ans, num);
  }
  return ans;
};
// 分治法
