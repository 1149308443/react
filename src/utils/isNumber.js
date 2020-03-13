/**
 * 是否数字
 * @param {*} n
 */
export default function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
