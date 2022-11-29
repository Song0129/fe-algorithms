import { test, expect } from "vitest";
import { hasPathSumOne, hasPathSumTwo } from "./index";

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

test("hasPathSumOne", () => {
	const TreeNode1 = new TreeNode(
		5,
		new TreeNode(
			4,
			new TreeNode(1, null, null),
			new TreeNode(11, new TreeNode(2, null, null), new TreeNode(7, null, null))
		),
		new TreeNode(8, null, new TreeNode(9, null, null))
	);

	const TreeNode2 = new TreeNode(1, new TreeNode(2, null, null), null);

	expect(hasPathSumOne(TreeNode1, 22)).toStrictEqual(true);
	expect(hasPathSumOne(TreeNode2, 0)).toStrictEqual(false);
	expect(hasPathSumOne(TreeNode2, 3)).toStrictEqual(true);
	expect(hasPathSumOne(null, 0)).toStrictEqual(false);
});
test("hasPathSumTwo", () => {
	const TreeNode1 = new TreeNode(
		5,
		new TreeNode(
			4,
			new TreeNode(1, null, null),
			new TreeNode(11, new TreeNode(2, null, null), new TreeNode(7, null, null))
		),
		new TreeNode(8, null, new TreeNode(9, null, null))
	);

	const TreeNode2 = new TreeNode(1, new TreeNode(2, null, null), null);

	expect(hasPathSumTwo(TreeNode1, 22)).toStrictEqual(true);
	expect(hasPathSumTwo(TreeNode2, 0)).toStrictEqual(false);
	expect(hasPathSumTwo(TreeNode2, 3)).toStrictEqual(true);
	expect(hasPathSumTwo(null, 0)).toStrictEqual(false);
});
