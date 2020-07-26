"use strict";
{
  // JSON --------------------------------------------------------------------//
  console.log("JSON");

  const person1 = [
    {
      name: "rectangle",
      width: 30,
      height: 50,
    },
    {
      name: "circle",
      width: 20,
      height: 20,
    },
  ];

  console.log(`>> Object: `, person1);
  let json = JSON.stringify(person1);
  console.log(`>> to JSON: ${json}`);
  let obj = JSON.parse(json);
  console.log(`>> to Object: `, obj);
}
