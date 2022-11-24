import { test, expect } from "vitest";
import { reverseListOne, reverseListTwo } from "./index";

// test("maxSubArrayOne", () => {
// 	const number: number[] = [1, -2, 3, 10, -4, 7, 2, -5];
// 	console.log(maxSubArrayOne(number));
// 	expect(maxSubArrayOne(number)).toBe(18);
// });
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

test("reverseListOne", () => {
	const ListNodeBefore = new ListNode(1, new ListNode(2, new ListNode(3)));
	const ListNodeAfter = new ListNode(3, new ListNode(2, new ListNode(1)));

	const result = reverseListOne(ListNodeBefore);
	expect(result).toStrictEqual(ListNodeAfter);
});
test("reverseListTwo", () => {
	const ListNodeBefore = new ListNode(1, new ListNode(2, new ListNode(3)));
	const ListNodeAfter = new ListNode(3, new ListNode(2, new ListNode(1)));

	const result = reverseListTwo(ListNodeBefore);
	expect(result).toStrictEqual(ListNodeAfter);
});
