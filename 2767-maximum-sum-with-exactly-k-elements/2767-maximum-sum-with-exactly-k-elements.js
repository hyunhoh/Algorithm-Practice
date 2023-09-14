/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let sum = 0;

  for(let i=0; i<k; i++) {
    sum += Math.max(...nums);
    nums.push(Math.max(...nums) + 1)
  }

  return sum;
};