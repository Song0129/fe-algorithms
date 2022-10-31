import { test, expect } from "vitest";
import { addStrings } from "./index";

test("addStrings", () => {
	const num1: string = "12";
	const num2: string = "34";

	expect(addStrings(num1, num2)).toStrictEqual("46");
});
