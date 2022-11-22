import { test, expect } from "vitest";
import { maxSubArrayTwo, maxSubArrayThree } from "./index";

// test("maxSubArrayOne", () => {
// 	const number: number[] = [1, -2, 3, 10, -4, 7, 2, -5];
// 	console.log(maxSubArrayOne(number));
// 	expect(maxSubArrayOne(number)).toBe(18);
// });

test("maxSubArrayTwo", () => {
	const number: number[] = [1, -2, 3, 10, -4, 7, 2, -5];
	console.log(maxSubArrayTwo(number));
	expect(maxSubArrayTwo(number)).toBe(18);
});
test("maxSubArrayThree", () => {
	const number: number[] = [1, -2, 3, 10, -4, 7, 2, -5];
	console.log(maxSubArrayThree(number));
	expect(maxSubArrayThree(number)).toBe(18);
});
