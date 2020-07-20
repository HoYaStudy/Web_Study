"use strict";
{
  // String ------------------------------------------------------------------//
  console.log("Data Type: String");

  const str_var = "test";
  console.log(`>> value: ${str_var}, type: ${typeof str_var}`);

  // Boolean -----------------------------------------------------------------//
  console.log("Data Type: Boolean");

  console.log(`>> value: ${true}, type: ${typeof true}`);
  console.log(`>> value: ${false}, type: ${typeof false}`);

  // Number ------------------------------------------------------------------//
  console.log("Data Type: Number");

  const num_var1 = 5;
  console.log(`>> value: ${num_var1}, type: ${typeof num_var1}`);

  const num_var2 = -7;
  console.log(`>> value: ${num_var2}, type: ${typeof num_var2}`);

  const num_var3 = 3.14;
  console.log(`>> value: ${num_var3}, type: ${typeof num_var3}`);

  const num_var4 = 1 / 0; // Infinity
  console.log(`>> value: ${num_var4}, type: ${typeof num_var4}`);

  const num_var5 = -1 / 0; // -Infinity
  console.log(`>> value: ${num_var5}, type: ${typeof num_var5}`);

  // NaN ---------------------------------------------------------------------//
  console.log("Data Type: Not a Number");

  const nan_var1 = NaN;
  console.log(`>> value: ${nan_var1}, type: ${typeof nan_var1}`);

  console.log(`>> ${isNaN(nan_var1)} vs ${Number.isNaN(nan_var1)}`); // true vs true
  const nan_var2 = "hello";
  console.log(`>> ${isNaN(nan_var2)} vs ${Number.isNaN(nan_var2)}`); // true vs false
  const nan_var3 = "33";
  console.log(`>> ${isNaN(nan_var3)} vs ${Number.isNaN(nan_var3)}`); // false vs false
  /*
  `isNan` returns true when current value is NaN or when converted to a number.
  `Number.isNaN` returns true only when current value is NaN
  */

  console.log(`>> NaN || true => ${NaN || true}`); // true
  console.log(`>> NaN || false => ${NaN || false}`); // false

  console.log(`>> NaN === NaN => ${NaN === NaN}`); // false

  // undefined ---------------------------------------------------------------//
  console.log("Data Type: Undefined");

  console.log(`>> type: ${typeof test_var}`); // Not yet defined

  let undefined_var;
  console.log(`>> value: ${undefined_var}, type: ${typeof undefined_var}`); // Not yet initialized

  console.log(`>> undefined || true => ${undefined || true}`); // true
  console.log(`>> undefined || false => ${undefined || false}`); // false

  console.log(`>> Translation to Number => ${new Number(undefined_var)}`); // NaN

  undefined_var = undefined_var || 7; // This assigns value 7 to undefined_var if not yet defined.
  console.log(`>> value: ${undefined_var}, type: ${typeof undefined_var}`); // Not yet initialized

  // null --------------------------------------------------------------------//
  console.log("Data Type: Null");

  const null_var = null;
  console.log(`>> value: ${null_var}, type: ${typeof null_var}`);

  console.log(`>> null == undefined => ${null == undefined}`); // true, because both are the same as false.
  console.log(`>> null === undefined => ${null === undefined}`); // false, because they are different object.
  console.log(
    `>> Number(null) == Number(undefined) => ${
      new Number(null) == new Number(undefined)
    }`
  ); // false

  console.log(`>> Translation to Number => ${new Number(null_var)}`); // 0

  // Reference
  // > https://2ality.com/2013/10/typeof-null.html

  // NaN vs null vs undefined ------------------------------------------------//
  console.log("Data Type: NaN vs Null vs Undefined");

  console.log(`>> NaN == null => ${NaN == null}`); // false
  console.log(`>> NaN == undefined => ${NaN == undefined}`); // false
}
