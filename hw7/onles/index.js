const obj = {
	address: {
		name: "test"
	}
};

function selector(obj, path) {
	let newpath = "";
	for (let i = 0; i < path.length; i++) {
		if (i >= 1) newpath = `${newpath}.${path[i]}`;
		else newpath = `${newpath}.${path[i]}`;
		console.log(obj[newpath]);
	}
}

selector(obj, ["address", "name"]);