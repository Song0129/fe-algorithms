export function addStrings(num1: string, num2: string): string {
	if (num1.length === 0) return num2;
	if (num2.length === 0) return num1;

	const res: string[] = [];
	let plus = 0;
	let i = num1.length - 1; // i 指向num1尾部
	let j = num2.length - 1; // j 指向num2尾部

	while (i >= 0 || j >= 0 || plus !== 0) {
		const sVal = i >= 0 ? parseInt(num1[i]) : 0;
		const tVal = j >= 0 ? parseInt(num2[j]) : 0;
		const sum = sVal + tVal + plus;
		const cur = sum % 10; // 计算当前位(求余)
		res.unshift(cur + ""); // 将数字转字符串插入res头部
		plus = sum >= 10 ? 1 : 0; // 暂存进位，下次循环用到
		i--;
		j--;
	}

	return res.join("");
}
