// 编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//  
//
// 示例 1：
//
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
//
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/longest-common-prefix
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 1) return ''
    let common
    let len = strs[0].length
    let j = 1
    while (j <= len) {
        common = strs[0].slice(0, j)
        for (let i = 1; i < strs.length; i++) {
            let item = strs[i]
            if (common === item.slice(0, j)) {
                continue
            } else {
                return common.slice(0, -1)
            }
        }
        j++
    }
    return strs[0].slice(0, j)
}
console.log(longestCommonPrefix(["ab", "a"]));