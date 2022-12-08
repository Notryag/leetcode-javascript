// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/majority-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let countMap = {}
    let max = 0
    let rs = null
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (countMap[element] !== undefined) {
            countMap[element] += 1
        } else {
            countMap[element] = 1
        }
    }
    for (const [key, val] of Object.entries(countMap) ) {
        if (val > max) {
            max = val
            rs = key
        }
    }
    return rs
}

console.log(majorityElement([2,2,1]));