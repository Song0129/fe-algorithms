import { test, expect } from "vitest";
import { climbStairsOne, climbStairsTwo, climbStairsThree } from "./index";

test("climbStairsOne", () => {
	const number: number = 3;

	expect(climbStairsOne(number)).toStrictEqual(3);
});

test("climbStairsTwo", () => {
	const number: number = 2;

	expect(climbStairsTwo(number)).toStrictEqual(2);
});

test("climbStairsThree", () => {
	const number: number = 7;

	expect(climbStairsThree(number)).toStrictEqual(21);
});
