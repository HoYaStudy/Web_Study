"use strict";
{
  // Arrow Function ----------------------------------------------------------//
  console.log("Arrow Function");

  let sum = (a, b) => {
    return a + b
  }

  console.log(`>> 1 + 2 => ${sum(1, 2)}`)

  // Rest parameter ----------------------------------------------------------//
  console.log("Rest parameter");

  function restParameter(...args) {
    for (let arg of args) {
      console.log(`>> ${arg}`)
    }
  }

  restParameter('one', 'two', 'three')

  // IIFE (Immediately Invoked Function Expression) --------------------------//
  console.log("IIFE");

  (function () {
    console.log(`>> This is IIFE.`)
  })()
}
