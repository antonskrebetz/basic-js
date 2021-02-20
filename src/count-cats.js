const CustomError = require("../extensions/custom-error");

module.exports = function countCats(m) {
    let cats = 0;
    for (let c of m) {
        for (let cat of c) {
            if (cat == '^^') {
                cats += 1;
            }
        }
    }
    return cats;
};
