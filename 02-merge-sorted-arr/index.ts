export function mergeOne(A: number[], m: number, B: number[], n: number) {
	if (!B.length || !n) return;

	for (let i = m; i < m + n; i++) {
		// B.shift()后加 ! 排除B数组为空时 取值为 undefined 类型报错
		A[i] = B.shift()!;
	}

	// 升序排列
	A.sort((a, b) => a - b);
}

export function mergeTwo(a: number[], m: number, b: number[], n: number) {
	a = a.splice(0, m > a.length ? a.length : m).concat(new Array(n).fill(0));
	for (var i = m; i < m + n; i++) {
		a[i] = b[i - m];
	}
	return a.sort();
}
