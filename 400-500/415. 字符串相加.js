// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。



// 示例 1：

// 输入：num1 = "11", num2 = "123"
// 输出："134"
// 示例 2：

// 输入：num1 = "456", num2 = "77"
// 输出："533"
// 示例 3：

// 输入：num1 = "0", num2 = "0"
// 输出："0"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let maxLen = Math.max(num1.length, num2.length)
    num1 = num1.split('').reverse().join('')
    num2 = num2.split('').reverse().join('')
    
    let sum = 0
    for (let i = 0; i < maxLen; i++) {
        sum += (parseInt(num1[i] || 0) + parseInt(num2[i] || 0)) * 10 ** i
    }
    return sum
};

console.log(addStrings("456", "77"));
console.log(10 ** 1);

