"use strict";
{
  // if statement ------------------------------------------------------------//
  console.log("if statement");

  let if_var = 2;
  if (if_var > 0) {
    console.log(`>> ${if_var}: Positive`);
  } else if (if_var == 0) {
    console.log(`>> ${if_var}: Zero`);
  } else {
    console.log(`>> ${if_var}: Negative`);
  }

  // switch statement --------------------------------------------------------//
  console.log("switch statement");

  let switch_var = 'banana';
  switch (switch_var) {
    case 'apple':
      console.log(`>> This is an apple.`)
      break;
    case 'banana':
      console.log(`>> This is a banana.`)
      break;
    default:
      console.log(`>> Not defined.`)
      break;
  }

  // for statement -----------------------------------------------------------//
  console.log("for statement");

  for (let i = 0; i < 3; ++i) {
    console.log(`>> for: ${i}`)
  }

  // The `for...in` statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
  const for_var1 = [1, 2, 3]
  for (let item in for_var1) {
    console.log(`>> for in: ${item}`)
  }

  // The `for...of` statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
  const for_var2 = ['a', 'b', 'c']
  for (let item of for_var2) {
    console.log(`>> for of: ${item}`)
  }

  // while statement ---------------------------------------------------------//
  console.log("while statement");

  let while_var = 0
  while (while_var < 3) {
    console.log(`>> while: ${while_var}`)
    ++while_var
  }

  // `do...while` statement
  let do_while_var = 3
  do {
    console.log(`>> do while: ${do_while_var}`)
  } while (do_while_var > 3)

  // break statement ---------------------------------------------------------//
  console.log("break statement");

  for (let i = 0; i < 5; ++i) {
    if (i > 3) {
      break;
    }
    console.log(`>> ${i}`)
  }

  // continue statement ------------------------------------------------------//
  console.log("continue statement");

  for (let i = 0; i < 10; ++i) {
    if ((i % 2) == 0) {
      continue;
    }
    console.log(`>> ${i}`)
  }
}
