"use strict";
{
// Assignment Operators ------------------------------------------------------//
console.log("Operator: Assignment");

/*
 * =     // Assignment
 * +=    // Addition assigniment
 * -=    // Subtraction assigniment
 * *=    // Multiplication assigniment
 * /=    // Division assigniment
 * %=    // Remainder assigniment
 * **=   // Exponentiation assigniment
 * <<=   // Left shift assignment
 * >>=   // Right shift assignment
 * >>>=  // Unsigned right shift assignment
 * &=    // Bitwise AND assignment
 * ^=    // Bitwise XOR assignment
 * |=    // Bitwise OR assignment
 * &&=   // Logical AND assignment
 * ||=   // Logical OR assignment
 * ??=   // Logical nullish assignment
 */
// Destructuring assignment
let assign_var = ["one", "two", "three"];
let [var1, var2, var3] = assign_var;
console.log(`>> ${var1}, ${var2}, ${var3}`);

// Comparison Operators ------------------------------------------------------//
console.log("Operator: Comparison");

console.log(`>> 3 == '3' => ${3 == "3"}`);    // Loose comparison with type conversion
console.log(`>> 3 != '3' => ${3 != "3"}`);
console.log(`>> 3 === '3' => ${3 === "3"}`);  // Strict comparison without type conversion
console.log(`>> 3 !== '3' => ${3 !== "3"}`);
console.log(`>> 3 > 4 => ${3 > 4}`);
console.log(`>> 3 >= 4 => ${3 >= 4}`);
console.log(`>> 3 < 4 => ${3 < 4}`);
console.log(`>> 3 <= 4 => ${3 <= 4}`);

// Arithmetic Operators ------------------------------------------------------//
console.log("Operator: Arithmetic");

/*
 * %   // Remainder
 * ++  // Increment
 * --  // Decrement
 * -   // Unary negation
 * +   // Unary plus
 * **  // Exponentiation
 */

let preInc_var = 3;
preInc_var = ++preInc_var + 1;
console.log(`>> preInc: ${preInc_var}`);

let postInc_var = 3;
postInc_var = postInc_var++ + 1;
console.log(`>> postInc: ${postInc_var}`);

let preDec_var = 3;
preDec_var = --preDec_var + 1;
console.log(`>> preDec: ${preDec_var}`);

let postDec_var = 3;
postDec_var = postDec_var-- + 1;
console.log(`>> postDec: ${postDec_var}`);

// Bitwise Operators ---------------------------------------------------------//
console.log("Operator: Bitwise");

/*
 * &   // Bitwise AND
 * |   // Bitwise OR
 * ^   // Bitwise XOR
 * ~   // Bitwise NOT
 * <<  // Left shift
 * >>  // Sign-propagation right shift
 * >>> // Zero-fill right shift
 */

// Logical Operators ---------------------------------------------------------//
console.log("Operator: Logical");

/*
 * &&  // Logical AND
 * ||  // Logical OR
 * !   // Logical NOT
 */

/*
Short-Circuit Evaluation
* false && anything
* true || anything
*/

// Nullish Coalescing Operator
console.log(`>> null ?? 3 => ${null ?? 3}`); // 3
console.log(`>> undefined ?? 3 => ${undefined ?? 3}`); // 3
console.log(`>> 1 ?? 3 => ${1 ?? 3}`); // 1

// String Operators ----------------------------------------------------------//
console.log("Operator: String");

let str_var = "3";
str_var += 3;
console.log(`>> value: ${str_var}, type: ${typeof str_var}`);
str_var = "hello" + " world";
console.log(`>> value: ${str_var}`);

// Conditional (Ternary) Operators -------------------------------------------//
console.log("Operator: Conditional (Ternary)");

let man_var = "man";
let woman_var = "woman";
console.log(`>> ${man_var == "man" ? "man" : "woman"}`);
console.log(`>> ${woman_var == "man" ? "man" : "woman"}`);

// Comma Operators -----------------------------------------------------------//
console.log("Operator: Comma");

/*
The comma operator `,` simply evaluates both of its operands and returns the value of the last operand.
This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop.
Often two separate statements can and should be used instead.
*/

var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);

// Unary Operators -----------------------------------------------------------//
console.log("Operator: Unary");

/*
`delete` operator deletes an object's property.
If the `delete` operator succeeds, it removes the propery from the object.
Trying to access it afterwards will yield `undefined`.
The `delete` operator returns `true` if the operation is possible; it returns `false` if the operation is not possible.

> delete object.property
> delete object[propertyKey]
> delete property             // legal only within a with statement
*/

/*
`typeof` operator returns a string indicating the type of the unevaluated operand.
Operand is the string, variable, keyword, or object for which the type is to be returned.
The parentheses are optional.

> typeof operand
> typeof (operand)
*/

/*
`void` operator specifies an expression to be evaluated without returning a value.
The parentheses surrounding the expression are optional, but it is good style to use them.

> void (expression)
> void expression
*/

// Relational Operators ------------------------------------------------------//
console.log("Operator: Relational");

/*
`in` operator returns true if the specified property is in the specified object.

> propNameOrNumber in objectName
*/

/*
`instanceof` operator returns true if the specified object is of the specified object type.

> objectName instanceof objectType
*/

// Grouping Operators --------------------------------------------------------//
console.log("Operator: Grouping");

// The grouping operator `( )` controls the precedence of evaluation in expressions.

// Operator Precedence -------------------------------------------------------//
console.log("Operator: Precedence");

//    Operator Type             Individual Operators
// --------------------------------------------------------------------------------
//  1 member                    . []
//  2 call / create instance     () new
//  3 negation / increment      ! ~ - + ++ -- typeof void delete
//  4 multiply / divide         * / %
//  5 addition / subtraction    + -
//  6 bitwise shift             << >> >>>
//  7 relational                < <= > >= in instanceof
//  8 equality                  == != === !==
//  9 bitwise-and               &
// 10 bitwise-xor               ^
// 11 bitwise-or                |
// 12 logical-and               &&
// 13 logical-or                ||
// 14 conditional               ?:
// 15 assignment                = += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=
// 16 comma                     ,

// Reference
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
}
