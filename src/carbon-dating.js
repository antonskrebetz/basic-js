const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  const active = parseFloat(sampleActivity);
  let check = false;
  if (
    typeof active != 'number' || active <= 0 || active > MODERN_ACTIVITY || isNaN(active)) {
    check = true;
  }
  if (typeof sampleActivity !== "string" || !sampleActivity || check) {
    return false;
  }
  let rate = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / active) / rate);
  return age;
};
