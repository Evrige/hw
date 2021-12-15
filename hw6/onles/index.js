const string = "Lorem ipsum dolor, bitch, sit amet SuCk consectetur fuck adipisicing elit. Quibusdam, autem corporis natus, unde totam iure dolores earum hic harum a ipsa sint, eius ut tenetur asperiores aliquam non repellat explicabo!";

function censorship(line) {
	let arrcensor = ["suck", "fuck", "bitch"];
	let time = line.toLowerCase();
	for (let i = 0; i < arrcensor.length; i++) {
		let regexp = new RegExp(`${arrcensor[i]}`, 'i')
		line = line.replace(regexp, "****");
	}
	console.log(line);
}
censorship(string);
