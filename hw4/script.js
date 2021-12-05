let firstNum, sign, secondNum;

function Ask() {
	firstNum = +prompt("Введите первое число");
	sign = prompt("Введите желаемую операцию");
	secondNum = +prompt("Введите второе число");

	while (isNaN(firstNum) || firstNum === "" || firstNum === null) firstNum = +prompt("Первое число введено не правильно");
	while (sign !== "+" && sign !== "-" && sign !== "*" && sign !== "/") sign = prompt("Введите знак операции правильно");
	while (isNaN(secondNum) || secondNum === "" || secondNum === null) secondNum = +prompt("Второе число введено не правильно");
}

function operation(firstNum, secondNum, sign) {
	let result;

	//Реализация через if
	if (sign === "+") result = firstNum + secondNum;
	else if (sign === "-") result = firstNum - secondNum;
	else if (sign === "*") result = firstNum * secondNum;
	else result = firstNum / secondNum;

	//Реализация через switch 
	// switch (sign) {
	// 	case "+": result = firstNum + secondNum;
	// 		break;
	// 	case "-": result = firstNum - secondNum;
	// 		break;
	// 	case "*": result = firstNum * secondNum;
	// 		break;
	// 	case "/": result = firstNum / secondNum;
	// 		break;
	// 	default: result = "Error";
	// }
	console.log(`Результат: ${firstNum} ${sign} ${secondNum} = ${result}`);
}
Ask();
operation(firstNum, secondNum, sign);