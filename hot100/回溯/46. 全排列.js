// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
 

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result =[]
    const path = []
    function backtrack(index) {
        if (path.length === nums.length) {
            result.push(path)
            return
        }

        for (let i = index; i < nums.length; i++) {
            const element = nums[i];
            path.push(element)
            backtrack(index + 1)
            path.pop()
        }
    }
    
    backtrack(0)
    return result
};