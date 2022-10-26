import { test, expect } from "vitest";
import { mergeOne, mergeTwo } from "./index";

test("mergeOne", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [6, 5, 4];
	mergeOne(A, 3, B, 3);
	console.log(A);
	expect(A).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("mergeTwo", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [6, 5, 4];
	console.log(A);
	expect(mergeTwo(A, 3, B, 3)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
