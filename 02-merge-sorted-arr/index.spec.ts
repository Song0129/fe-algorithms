import { test, expect } from "vitest";
import { merge } from "./index";

test("merge", () => {
	const A: number[] = [1, 2, 3];
	const B: number[] = [6, 5, 4];
	console.log(A);
	expect(A).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
