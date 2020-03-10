function checkIsNumber(value) {
  if (typeof value !== "number") {
    throw new TypeError("Value must be a number, a '"+(typeof value)+"' is passed");
  }
}

function sum(a, b) {
  checkIsNumber(a);
  checkIsNumber(b);
  return a + b;
}

module.exports = sum;
