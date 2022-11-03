import { test, expect } from "vitest";
import { compareVersion } from "./index";

test("compareVersion1", () => {
	const version1: string = "1.1";
	const version2: string = "2.1";

	console.log(compareVersion(version1, version2));
	expect(compareVersion(version1, version2)).toStrictEqual(-1);
});

test("compareVersion2", () => {
	const version1: string = "1.1";
	const version2: string = "1.01";

	console.log(compareVersion(version1, version2));
	expect(compareVersion(version1, version2)).toStrictEqual(0);
});

test("compareVersion3", () => {
	const version1: string = "1.1";
	const version2: string = "1.1.1";

	console.log(compareVersion(version1, version2));
	expect(compareVersion(version1, version2)).toStrictEqual(-1);
});

test("compareVersion4", () => {
	const version1: string = "2.0.1";
	const version2: string = "2";

	console.log(compareVersion(version1, version2));
	expect(compareVersion(version1, version2)).toStrictEqual(1);
});

test("compareVersion5", () => {
	const version1: string = "0.226";
	const version2: string = "0.36";

	console.log(compareVersion(version1, version2));
	expect(compareVersion(version1, version2)).toStrictEqual(1);
});
