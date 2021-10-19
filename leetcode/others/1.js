/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   for(let i=0; i<nums.length; i++) {
       for(let j=0; j<nums.length; j++) {
           if(nums[i] + nums[j] === target && i!== j) {
               return [i, j];
           }
       }
   }
};

var twoSum2 = function(nums, target) {
    // 
    for(let i = 0; i<nums.length; i++) {
        for(let j = 0; j<nums.length; j++) {
            if(i == j) {
                return;
            }
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return false;
 };

 var twoSum3 = function(nums, target) {
    // 
    const sumMap = new Map();
    for(let i = 0; i< nums.length; i++) {
        if(sumMap.has(nums[i])) {
            sumMap.set(target-nums[i], i)
        } else {
            return [sumMap.get(nums[i]), j]
        }
    }
 };