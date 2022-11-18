import { test, expect } from "vitest";
import { permute } from "./index";

test("permute", () => {
	const number: number[] = [1, 2, 3];
	console.log(permute(number));
	expect(permute(number)).toStrictEqual([
		[1, 2, 3],
		[1, 3, 2],
		[2, 1, 3],
		[2, 3, 1],
		[3, 1, 2],
		[3, 2, 1],
	]);
});
