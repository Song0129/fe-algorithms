import { test, expect } from "vitest";
import { levelOrderOne, levelOrderTwo } from "./index";

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

test("levelOrderOne", () => {
	const TreeNode1 = new TreeNode(
		3,
		new TreeNode(9, null, null),
		new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
	);

	const TreeNode2 = new TreeNode(1, new TreeNode(2, null, null), null);

	const TreeNode3 = new TreeNode(
		1,
		new TreeNode(2, new TreeNode(4, null, null), null),
		new TreeNode(3, null, new TreeNode(5, null, null))
	);

	expect(levelOrderOne(TreeNode1)).toStrictEqual([[3], [9, 20], [15, 7]]);
	expect(levelOrderOne(TreeNode2)).toStrictEqual([[1], [2]]);
	expect(levelOrderOne(TreeNode3)).toStrictEqual([[1], [2, 3], [4, 5]]);
});
test("levelOrderTwo", () => {
	const TreeNode1 = new TreeNode(
		3,
		new TreeNode(9, null, null),
		new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
	);

	const TreeNode2 = new TreeNode(1, new TreeNode(2, null, null), null);

	const TreeNode3 = new TreeNode(
		1,
		new TreeNode(2, new TreeNode(4, null, null), null),
		new TreeNode(3, null, new TreeNode(5, null, null))
	);

	expect(levelOrderTwo(TreeNode1)).toStrictEqual([[3], [9, 20], [15, 7]]);
	expect(levelOrderTwo(TreeNode2)).toStrictEqual([[1], [2]]);
	expect(levelOrderTwo(TreeNode3)).toStrictEqual([[1], [2, 3], [4, 5]]);
});
