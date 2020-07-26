"use strict";
{
  // Array -------------------------------------------------------------------//
  console.log("Array");

  let arr_var1 = new Array();
  let arr_var2 = [1, 2, 3, 4, 5];

  console.log(`>> new Array(): ${arr_var1}`);
  console.log(`>> [1, 2, 3, 4, 5]: ${arr_var2}`);

  // length property ---------------------------------------------------------//
  console.log("length Property");

  console.log(`>> Array: ${arr_var2}, Length: ${arr_var2.length}`);

  // forEach Method ----------------------------------------------------------//
  console.log("forEach Method");

  arr_var2.forEach((elem) => console.log(`>> forEach: ${elem}`));

  // push/pop Method ---------------------------------------------------------//
  console.log("push/pop Method");

  console.log(`>> Current: ${arr_var2}`);
  arr_var2.push(6);
  console.log(`>> Push 6: ${arr_var2}`);
  arr_var2.pop();
  console.log(`>> Pop: ${arr_var2}`);

  // shift/unshift Method ----------------------------------------------------//
  console.log("shift/unshift Method");

  // This methods are slower than push/pop methods.
  console.log(`>> Current: ${arr_var2}`);
  arr_var2.shift();
  console.log(`>> shift: ${arr_var2}`);
  arr_var2.unshift(1);
  console.log(`>> unshift 1: ${arr_var2}`);

  // splice/slice Method -----------------------------------------------------//
  console.log("splice/slice Method");

  // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  console.log(`>> Current: ${arr_var2}`);
  // Insert
  arr_var2.splice(2, 0, 7);
  console.log(`>> splice(2, 0, 7): ${arr_var2}`);
  // Delete
  arr_var2.splice(2, 1);
  console.log(`>> splice(2, 1): ${arr_var2}`);
  // Create New Array
  let arr_var3 = arr_var2.slice(2, 4);
  console.log(`>> slice(2, 4): ${arr_var3}`);

  // concat Method -----------------------------------------------------------//
  console.log("concat Method");

  console.log(`>> Current: ${arr_var2}`);
  arr_var3 = arr_var2.concat([6, 3]);
  console.log(`>> concat([6, 3]): ${arr_var3}`);

  // indexOf/lastIndexOf Method ----------------------------------------------//
  console.log("indexOf/lastIndexOf Method");

  console.log(`>> Current: ${arr_var3}`);
  // arr.indexOf(searchElement[, fromIndex])
  console.log(`>> indexOf(3): ${arr_var3.indexOf(3)}`);
  console.log(`>> indexOf(3, 4): ${arr_var3.indexOf(3, 4)}`);
  console.log(`>> indexOf(7): ${arr_var3.indexOf(7)}`);
  // arr.lastIndexOf(searchElement[, fromIndex])
  console.log(`>> lastIndexOf(3): ${arr_var3.lastIndexOf(3)}`);
  console.log(`>> lastIndexOf(7): ${arr_var3.lastIndexOf(7)}`);

  // includes Method ---------------------------------------------------------//
  console.log("includes Method");

  // arr.includes(valueToFind[, fromIndex])
  console.log(`>> Current: ${arr_var2}`);
  console.log(`>> includes(2): ${arr_var2.includes(2)}`);
  console.log(`>> includes(2, 2): ${arr_var2.includes(2, 2)}`);
  console.log(`>> includes(7): ${arr_var2.includes(7)}`);

  // join/split Method -------------------------------------------------------//
  console.log("join/split Method");

  // Array -> String
  let arr_var4 = ["h", "e", "l", "l", "o"];
  console.log(`>> join: ${arr_var4.join("")}`);
  // String -> Array
  let str_var = "world";
  console.log(`>> split: ${str_var.split("")}`);

  // sort/reverse Method -----------------------------------------------------//
  console.log("sort/reverse Method");

  arr_var1 = [1, 5, 4, 2, 3];
  console.log(`>> Current: ${arr_var1}`);
  console.log(`>> reverse: ${arr_var1.reverse()}`);
  console.log(`>> sort: ${arr_var1.sort()}`);
  console.log(`>> sort: ${arr_var1.sort((a, b) => b - a)}`);

  // find Method -------------------------------------------------------------//
  console.log("find Method");

  console.log(`>> Current: ${arr_var2}`);
  console.log(`>> find >3: ${arr_var2.find((elem) => elem > 3)}`);

  // some/every Method -------------------------------------------------------//
  console.log("some/every Method");

  console.log(`>> Current: ${arr_var2}`);
  console.log(`>> some >3: ${arr_var2.some((elem) => elem > 3)}`); // true
  console.log(`>> every >3: ${arr_var2.every((elem) => elem > 3)}`); // false

  // filter/map/reduce Method ------------------------------------------------//
  console.log("filter/map/reduce Method");

  console.log(`>> Current: ${arr_var2}`);
  console.log(`>> filter even: ${arr_var2.filter((elem) => elem % 2 == 0)}`);
  console.log(`>> map square: ${arr_var2.map((elem) => elem * elem)}`);
  console.log(
    `>> reduce sum: ${arr_var2.reduce((prev, curr) => prev + curr, 0)}`
  );
  console.log(
    `>> reduceRight negative sum: ${arr_var2.reduce(
      (prev, curr) => prev - curr,
      0
    )}`
  );
}
