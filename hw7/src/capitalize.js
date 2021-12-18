function capitalize(string) {
	let word = string.split(" ");
	word = word.map(item => {
		return item = (`${item[0].toUpperCase()}${item.slice(1)}`);
	});
	return string = word.join(" ");
}
module.exports = capitalize;
