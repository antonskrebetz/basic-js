const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

	let turnCount = 1;
	while (disksNumber > 1) {
		turnCount = (turnCount * 2) + 1;
		disksNumber--;
	}
	let secCount = Math.floor(turnCount * 3600 / turnsSpeed);
	return {turns: turnCount, seconds: secCount};
};
