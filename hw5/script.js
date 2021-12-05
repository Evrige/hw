function writetext() {
	let i = 1,
		result = " ";
	do {
		let text = prompt("Введите текст"),
			cancel;

		console.log(text);
		result += text;

		if (i % 3 == 0) cancel = confirm("Закончить программу");
		if (cancel) break;
		i++;
	}
	while (true);
	console.log(result);
}
writetext();