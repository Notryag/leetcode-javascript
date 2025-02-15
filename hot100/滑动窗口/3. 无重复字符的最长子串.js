// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 
// 子串
//  的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成
// 做题过程想法：
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0
    let currentStr = ''
    for (let i = 0; i < s.length; i++) {
        if (currentStr.indexOf(s[i]) === -1) {
            currentStr += s[i]
            console.log(currentStr, 'pwwkew');

            maxLen = Math.max(maxLen, currentStr.length)
        } else {
            currentStr = currentStr.slice(currentStr.lastIndexOf(s[i]) + 1) + s[i]
        }

    }
    return maxLen
};

// 第一遍是通过字符串的indexof来判断是否子串重复，可以变成map对象
// 这个滑动窗口考察，用滑动窗口比较好 -》 有没有滑动窗口的固定公式呢？
var lengthOfLongestSubstring = function (s) {
    let left = 0
    const map = new Map()
    let maxLen = 0
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = map.get(s[right]) + 1
        }
        map.set(s[right], right)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
};
// 错误
// 问题 left = Math.max(map.get(s[right] +1), left)是需要关注左侧的点，和上一个和右侧点相同点的位置，也就是 lastRighSame是不是在窗口中，
// 在窗口中才更新left
console.log(lengthOfLongestSubstring("pwwkew"));
