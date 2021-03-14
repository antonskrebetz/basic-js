const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let repeat = options.repeatTimes,
		separ = options.separator,
		add = options.addition,
		addTime = options.additionRepeatTimes,
		addSep = options.additionSeparator;
	
	if (repeat == undefined) {repeat = 1;}
	if (addTime == undefined) {addTime = 1;}
	if (add == undefined && add !== null) {add = '';}
	if (separ == undefined) {separ = '+';}
	if (addSep == undefined) {addSep = '|';}

	let resultStr = '';

	for (let i = 0; i < repeat; i++) {
		resultStr += str;
		for (let j = 0; j < addTime; j++) {
			if (j < addTime - 1) {
				resultStr += add + addSep;
			} else if (i < repeat - 1) {
				resultStr += add + separ;
			} else {
				resultStr += add;
			}
		}
	}
	return resultStr;
};
  