"use strict";
{
  // Async/Await -------------------------------------------------------------//
  console.log("Async/Await");

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getApple() {
    await delay(1000);
    // throw `error`;
    return "apple";
  }

  async function getBanana() {
    await delay(2000);
    return "banana";
  }

  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `>> ${apple} + ${banana}`;
  }

  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
      fruits.join(" + ")
    );
  }

  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }

  pickFruits().then(console.log);
  pickAllFruits().then(console.log);
  pickOnlyOne().then(console.log);
}
