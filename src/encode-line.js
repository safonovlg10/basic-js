const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length === 0) return '';
  let result = "";
  let currentChar = str[0];
  let count = 1;

  for (let index = 1; index < str.length; index++) {
    if (currentChar === str[index]) {
      count++;
    } else {
      result += (count > 1 ? count : "") + currentChar;
      currentChar = str[index];
      count = 1;
    }
  }
  result += (count > 1 ? count : "") + currentChar;
  return String(result);
}

module.exports = {
  encodeLine,
};
