# 前端算法学习

使用 TypeScript 完成算法内容。
借此可以巩固 TypeScript 一些基本使用方法。

vitest 作为测试工具。
便于查看代码运行是否正确，便于代码重构。

## 运行&测试

```
// 运行所有测试
pnpm test-all
```

```
// 运行单个测试
pnpm test xxx
xxx 为单元测试名称
```

## 题目

| 序号 | 题目名称                                                                 | 考点              | 难度     |
| ---- | ------------------------------------------------------------------------ | ----------------- | -------- |
| 1    | [无重复字符的最长子串](./01-length-of-longest-subset/index.ts)           | `双指针` `哈希`   | `medium` |
| 2    | [合并两个有序数组](./02-merge-sorted-arr/index.ts)                       | `双指针`          | `easy`   |
| 3    | [字符串相加](./03-add-strings/index.ts)                                  | `双指针` `模拟`   | `easy`   |
| 4    | [比较版本号](./04-compare-version/index.ts)                              | `字符串`          | `medium` |
| 5    | [有效的括号](./05-is-valid-brackets/index.ts)                            | `栈`              | `easy`   |
| 6    | [两数之和](./06-two-sum/index.ts)                                        | `哈希`            | `easy`   |
| 7    | [爬楼梯](./07-climb-stairs/index.ts)                                     | `递归` `动态规划` | `easy`   |
| 8    | [全排列](./08-permutations/index.ts)                                     | `回溯` `递归`     | `medium` |
| 9    | [最大子序和](./09-max-sub-array/index.ts)                                | `贪心` `动态规划` | `easy`   |
| 10   | [路径总和](./10-reverse-linked-list/index.ts)                            | `递归` `DFS`      | `easy`   |
| 11   | [反转链表](./11-path-sum/index.ts)                                       | `链表` `递归`     | `easy`   |
| 12   | [二叉树的层序遍历](./12-binary-tree-level-order-traversal/index.ts)      | `二叉树` `BFS`    | `medium` |
| 13   | [数组中的第 K 个最大元素](./13-kth-largest-element-in-an-array/index.ts) | `快速排序` `二分` | `medium` |
