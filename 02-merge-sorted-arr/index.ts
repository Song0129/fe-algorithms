export function merge(A: number[], m: number, B: number[], n: number) {
	if (!B.length || !n) return;

	for (let i = m; i < m + n; i++) {
		A[i] = B.shift()!;
	}

	// 升序排列
	A.sort((a, b) => a - b);
}
