function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("Error"));
      }
      resolve(a - b);
    }, 1000);
  });
}

function asyncMultiply(a, b) {
  return new Promise((resolve) => setTimeout(resolve(a * b), 1000));
}

module.exports = { asyncAdd, asyncSubtract, asyncMultiply };
