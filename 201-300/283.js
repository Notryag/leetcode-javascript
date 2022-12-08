// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//  

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/move-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length
    let j = 0
    for (let i = 0; i < len; i++) {
        const element = nums[i];
        j++
        if(element === 0) {
            nums.splice(i, 1)
            nums.push(0)
            i--
        }
        if(j >= len) {
            return
        }
    }
}

console.log(moveZeroes([0,1,0,3,12]));