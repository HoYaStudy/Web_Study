// 'use strict';

// Mutable Variable ----------------------------------------------------------//
console.log("Mutable Variable")

let mutable_var = "mutable"
console.log(`>> ${mutable_var}`)

mutable_var = "I can be modified."
console.log(`>> ${mutable_var}`)

// Immutable Variable --------------------------------------------------------//
console.log("Immutable Variable")

const immutable_var = "immutable"
console.log(`>> ${immutable_var}`)

// immutable_var = "I can NOT be modified."    // > Error!!

// Variable Hoisting ---------------------------------------------------------//
console.log("Variable Hoisting")

console.log(`>> ${hoisting_var}`)   // This isn't an error even though there is no definition of this variable yet.

hoisting_var = "initialization"     // This variable is not yet defined but can be used.
console.log(`>> ${hoisting_var}`)   // This isn't an error even though there is no definition of this variable yet.

var hoisting_var = "hoisting"
console.log(`>> ${hoisting_var}`)
