import { test, expect } from "vitest";
import { isValid } from "./index";

test("isValid", () => {
	const str1: string = "{}";
	const str2: string = "[]";
	const str3: string = "()";
	const str4: string = "{]";
	const str5: string = "(}";

	expect(isValid(str1)).toStrictEqual(true);
	expect(isValid(str2)).toStrictEqual(true);
	expect(isValid(str3)).toStrictEqual(true);
	expect(isValid(str4)).toStrictEqual(false);
	expect(isValid(str5)).toStrictEqual(false);
});
