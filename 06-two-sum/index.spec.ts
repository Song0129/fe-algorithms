import { test, expect } from "vitest";
import { twoSumOne, twoSumTwo } from "./index";

test("twoSumOne", () => {
	const numbers: number[] = [3, 2, 4];
	const target = 6;
	const numbers2: number[] = [20, 70, 110, 150];
	const target2 = 90;

	console.log(twoSumOne(numbers, target));
	expect(twoSumOne(numbers, target)).toStrictEqual([1, 2]);
	expect(twoSumOne(numbers2, target2)).toStrictEqual([0, 1]);
});

test("twoSumOne", () => {
	const numbers: number[] = [3, 2, 4];
	const target = 6;
	const numbers2: number[] = [20, 70, 110, 150];
	const target2 = 90;

	expect(twoSumTwo(numbers, target)).toStrictEqual([1, 2]);
	expect(twoSumTwo(numbers2, target2)).toStrictEqual([0, 1]);
});
