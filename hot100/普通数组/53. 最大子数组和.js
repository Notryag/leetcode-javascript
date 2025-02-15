
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组
// 是数组中的一个连续部分。



// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路1，如果是用动态规划 建立dp[n]和之前 dp的关系，关系是？ dp[n] = dp[n-1] + nums[i]但是有个问题，就是需要的
// 是连续的数组，不能确保dp【n-1】是连续的

// 思路2： 用窗口，从左到右循环，记录每次的最大值：
// 问题1： 什么时候更新left？为负数？要加的值为负数，还是和为负数？都不行好像，要加的值为负数，可能和为最大值。如果和为负数，有没有可能都是负数的集合
// 但是都为负数，就是说越加越小，不用相加，直接算出最小值就行，也就是可以用和为负数
var maxSubArray = function (nums) {
    let maxNume = nums[0]

    let left = 0
    let allSum = nums[left]
    for (let right = 1; right < nums.length; right++) {
        if (allSum <= 0) {
            left = right
            allSum = nums[right]
        } else {
            allSum += nums[right]
        }
        maxNume = Math.max(maxNume, allSum)
    }
    return maxNume
};


maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// --------------------------------------------------------------------------------------------------------------------------------
// 反思：
// 思路一是可以的，【5，6，，0，0，0，0，0，1】，dp[i] = Math.max(dp[i - 1] + nums[i], dp[i - 1])，想的这个公式就是错误，导致没办法向下深入
// 

var maxSubArray = function (nums) {
    const dp = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    return Math.max(...dp)
};
// todo 学习分治法