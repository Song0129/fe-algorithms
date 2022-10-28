import { test, expect } from "vitest";
import { mergeOne, mergeTwo, mergeThree } from "./index";

test("merge1", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [2, 5, 6];
	mergeOne(A, 3, B, 3);
	console.log(A);
	expect(A).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("merge2", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [2, 5, 6];
	console.log(A);
	expect(mergeTwo(A, 3, B, 3)).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("merge3", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [2, 5, 6];
	mergeThree(A, 3, B, 3);
	console.log(A);
	expect(A).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("merge4", () => {
	const A: number[] = [0];
	const B: number[] = [1];
	mergeThree(A, 1, B, 1);
	console.log(A);
	expect(A).toStrictEqual([0, 1]);
});
