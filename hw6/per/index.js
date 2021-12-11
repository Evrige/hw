const arr = ["What is your name", 212121221, "How are you", "Hello", 12312, "one"];

function filter(mas, condition) {
	let newArr = [];
	for (let i = 0; i < mas.length; i++) {
		if (condition(mas[i])) newArr.push(mas[i]);
	}
	console.log(newArr);
}

function condition(item) {
	if (item.length >= 5 && typeof item === "string") return true;
	else return false;
}
filter(arr, condition);