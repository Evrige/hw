function arrNum() {
	let arr = [];

	for (let i = 0; i < 100; i++) {
		arr.push(Math.round((Math.random(100) * 100)));
	}
	console.log(arr);

	const arrNew = arr.map((item) => item * 3);
	console.log(arrNew);
}
arrNum();