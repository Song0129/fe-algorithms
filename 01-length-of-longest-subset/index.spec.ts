import { test, expect } from "vitest";
import { lengthOfLongestSubstringOne, lengthOfLongestSubstringTwo, lengthOfLongestSubarrOne, lengthOfLongestSubarrTwo } from "./index";

test("lengthOfLongestSubstringOne", () => {
	const str = `234556`;
	console.log(lengthOfLongestSubstringOne(str));
	expect(lengthOfLongestSubstringOne(str)).toBe(4);
});

test("lengthOfLongestSubstringTwo", () => {
	const str = `234556`;
	console.log(lengthOfLongestSubstringTwo(str));
	expect(lengthOfLongestSubstringTwo(str)).toBe(4);
});

test("lengthOfLongestSubarrOne", () => {
	const arr = [2, 3, 4, 5, 5, 6];
	console.log(lengthOfLongestSubarrOne(arr));
	expect(lengthOfLongestSubarrOne(arr)).toBe(4);
});

test("lengthOfLongestSubarrTwo", () => {
	const arr = [2, 3, 4, 5, 5, 6];
	console.log(lengthOfLongestSubarrTwo(arr));
	expect(lengthOfLongestSubarrTwo(arr)).toBe(4);
});
