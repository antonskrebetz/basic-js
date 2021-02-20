const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false;
	}
	let name = [];
	for (letter of members) {
		if (typeof(letter) == 'string')
		name.push(letter.trim()[0].toUpperCase());
	}
	return name.sort().join('');
};
