// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

//  

// 示例 1 ：

// 输入：nums = [2,2,1]
// 输出：1
// 示例 2 ：

// 输入：nums = [4,1,2,1,2]
// 输出：4
// 示例 3 ：

// 输入：nums = [1]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/single-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // only constant extra space
    // can not use map
    // set array in sort, then compare with 
    let res = null
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            res =  nums[i]
        } 
    }
    return res
};

console.log(singleNumber([2, 2, 1]));
