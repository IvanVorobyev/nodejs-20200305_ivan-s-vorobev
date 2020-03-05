function sum(a, b) {
  return [a, b].map(value => {
    if (typeof value !== "number") {
      throw new TypeError("Value must be a number, a '"+(typeof value)+"' is passed");
    }
    return value;
  }).reduce((a, b) => a + b, 0);
}

module.exports = sum;
