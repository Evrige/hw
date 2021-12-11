function askUser() {
	let arr = [];

	for (let i = 0; true; i++) {
		let question = prompt("Enter plaese");

		if (question === null || question === "") arr.pop();
		else arr.push(question);

		console.log(arr);
	}
}
askUser();