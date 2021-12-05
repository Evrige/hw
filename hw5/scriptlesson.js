
//Артур Дудник

// function question() {
// 	let word, result = "";

// 	do {
// 		word = prompt("Введите текст");

// 		result += word;
// 		if (word === "break") break;
// 	}
// 	while (true)
// 	console.log(result);
// }

// question();

function question() {
	let num;

	do {
		num = prompt("Введите число");
		if (num === "exit") break;
		num = +num;
		if (num > 0) alert("Положительное");
		else if (num < 0) alert("Отрицательное");
		else if (num === 0) alert("0");
		else alert(NaN);
	}
	while (true);
}

question();