import { test, expect } from "vitest";
import { threeSum } from "./index";

test("threeSum", () => {
	const arr1: number[] = [0];
	const arr2: number[] = [-2, 0, 1, 1, 2];
	const arr3: number[] = [-10, 0, 10, 20, -10, -40];

	expect(threeSum(arr1)).toStrictEqual([]);

	expect(threeSum(arr2)).toStrictEqual([
		[-2, 0, 2],
		[-2, 1, 1],
	]);
	expect(threeSum(arr3)).toStrictEqual([
		[-10, -10, 20],
		[-10, 0, 10],
	]);
});
