// 给定两个字符串 s 和 p，找到 s 中所有 p 的 
// 异位词
//  的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

 

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 

// 提示:

// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 思路：既然是滑动窗口，就是通过窗口找到p，但是找的是易位词，找到之后的判断是第一个问题，滑动窗口需要注意的点：什么时候移动left？
// 1. 判断是否是易位词
// + 移动left条件
var findAnagrams = function(s, p) {
  
    let left = 0
    const sortedP = p.split('').sort().join('')
    const result = []
    for (let right = 0; right < s.length; right++) {
        if (right - left + 1 === p.length) {
            const sub = s.substring(left, right + 1)
            const sortedSub = sub.split('').sort().join('')
            if (sortedP === sortedSub) {
                result.push(left)
            }
            left++
        }
    }
    return result
};

console.log(findAnagrams("cbaebabacd", "abc"));
