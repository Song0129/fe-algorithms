/**
 * 题目名称：合并两个有序的数组
 * leetcode 题目: https://leetcode-cn.com/problems/merge-sorted-array/
 * leetcode 题解: https://leetcode-cn.com/problems/merge-sorted-array/solution/by-hovinghuang-58f6/
 * 牛客网 题目: https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=295&tqId=658&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/950d8331e9004749adc1a3d98a5ec29f
 */

/**
 * @param  {number[]} A 数组 A
 * @param  {number} m 数组 A 长度
 * @param  {number[]} B 数组 B
 * @param  {number} n 数组 B 长度
 */

/**
 * 解法一：JS Sort
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）将 B shift 填到 A 尾部的扩容区域，然后用 sort 排序
 * 时间复杂度：O(nlogn)， JS sort 方法基于快速排序实现
 * 空间复杂度：O(1)，常数级变量，无额外空间
 */
export function mergeOne(A: number[], m: number, B: number[], n: number) {
	if (!B.length || !n) return;

	for (let i = m; i < m + n; i++) {
		// B.shift()后加 ! 排除B数组为空时 取值为 undefined 类型报错
		A[i] = B.shift()!;
	}

	// 升序排列
	A.sort((a, b) => a - b);
}

export function mergeTwo(a: number[], m: number, b: number[], n: number) {
	a = a.splice(0, m > a.length ? a.length : m).concat(new Array(n).fill(0));
	for (var i = m; i < m + n; i++) {
		a[i] = b[i - m];
	}
	return a.sort();
}
