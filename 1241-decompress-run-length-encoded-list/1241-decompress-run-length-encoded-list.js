/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    return nums.reduce((acc, cur, idx) => {
        if(idx % 2) {
            for(let i=0; i<nums[idx-1]; i++) {
                acc.push(cur)
            }
        } 
            return acc;
    }, [])
};