// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。



// 示例 1：

// 输入：nums = [10,2]
// 输出："210"
// 示例 2：

// 输入：nums = [3,30,34,5,9]
// 输出："9534330"
// 提示：
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    const result = []
    nums.sort( (a, b) => {
        let maxLen = Math.min(a.length, b.length)
        for (let i = 0; i < maxLen; i++) {
            if (a[i] === undefined) {
                return -1
            } else if (b[i] === undefined) {
                return -1
            }
            if (a[i] > b[i]) {
                return 1
            }  else if (a[i] < b[i]) {
                return -1
            }
        }
    })
    console.log(nums)
    // return result[0]
};
// largestNumber([8308, 8308, 830])
largestNumber([1,2,3,4,5,6,7,8,9,0])
largestNumber([10,2])

