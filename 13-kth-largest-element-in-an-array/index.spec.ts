import { test, expect } from "vitest";
import { findKthLargest } from "./index";

test("findKthLargest", () => {
	const arr1: number[] = [1, 3, 5, 2, 2];
	const arr2: number[] = [10, 10, 9, 9, 8, 7, 5, 6, 4, 3, 4, 2];

	expect(findKthLargest(arr1, 3)).toStrictEqual(2);

	expect(findKthLargest(arr2, 3)).toStrictEqual(9);
});
