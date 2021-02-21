const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let repeat = options.repeatTimes,
		separ = options.separator,
		add = options.addition,
		addTime = options.additionRepeatTimes,
		addSep = options.additionSeparator;
	
	if (!repeat) {repeat = 1;}
	if (!addTime) {addTime = 1;}
	if (!separ) {separ = '+';}
	if (!addSep) {addSep = '|';}

	let strAdd = '';
	let resultStr = '';

	let j = 1;
	while (j <= addTime) {
		strAdd += add + addSep;
		j++;  
	}

	let i = 1;
	while (i <= repeat) {
		resultStr += str + strAdd + separ;
		i++;
	}

	return resultStr;
};
  