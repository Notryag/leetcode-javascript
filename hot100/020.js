// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。


// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let  stack = []
    const keyMap = {
        ")": "(",
        "]" :"[",
        "}": "{"
    }

    let arr =  s.split('')
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const last = stack[stack.length - 1]
        if (last !== keyMap[item] || stack.length === 0) {
            stack.push(item)
        } else {
            stack.pop()
        }
    }
    return !stack.length
};
console.log(isValid("()"), 'isValid("()")');