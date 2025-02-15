// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。



// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
// 思路1： 比较i[1] 和i+1【0】，如果大于就push到结果里,但是有个问题一旦是连续的合并，怎么push？
// 数组增删比较麻烦，是不是可以做一个中间态，把 i[1] = i+1[0],或者===‘x’之类的保存状态（需要合并的标识）-》就算做到了，怎么处理中间态的数组？
// 思路2： 用动态窗口，合规的放在窗口内，数组操作太麻烦了，转为字符串？例如1，3，2，6 -》 不行，不能确定小数组的左右侧——》如果通过index的奇偶性来判断？

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let pre = intervals[0]

    let result =[]
    for (let i = 0; i < intervals.length; i++) {
        const element = intervals[i];
        if (pre[1] >= element[0]) {
            pre[1] = Math.max(element[1], pre[1])
        } else {
            result.push(pre)
            pre = element
        }
    }
    result.push(pre)
    return result
};
console.log(merge([[1,4],[0,4]]))
// console.log(merge([[1,4],[4,5]]))
// 反思：