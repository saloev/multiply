module.exports = function multiply(first, second) {
  const bigIntFirst = BigInt(first);
  const bigIntSecond = BigInt(second);
  const result = bigIntFirst * bigIntSecond;

  return result.toString();
};
