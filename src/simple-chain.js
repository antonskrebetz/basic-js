const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
	},
	addLink(value) {
		this.arr.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (!position || isNaN(position)) {
			this.arr = [];
			throw new Error('put a number');
		} 
		this.arr.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		let chain = this.arr.join('~~');
		this.arr = [];
		return chain;
	}
};

module.exports = chainMaker;
