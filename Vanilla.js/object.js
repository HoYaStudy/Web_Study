'use strict';
{
  // Object ------------------------------------------------------------------//
  console.log('Object');

  const person1 = { name: 'kim', age: 30 }
  console.log(`>> name: ${person1.name}, age: ${person1['age']}`)

  // Constructor Function ----------------------------------------------------//
  console.log('Constructor Function');

  function Person(name, age) {
    // return {
    //   name,
    //   age
    // }

    // Shorthand Property
    this.name = name
    this.age = age
  }

  const person2 = new Person('Lee', 20)
  console.log(`>> `, person2)

  // Computed Property -------------------------------------------------------//
  console.log('Computed Property');

  function printValue(obj, key) {
    // console.log(`>> ${obj.key}`)   // undefined. Because there is no 'key' property in the obj.
    console.log(`>> ${obj[key]}`)
  }
  printValue(person1, 'name')
  printValue(person2, 'age')

  // Shallow Copy ------------------------------------------------------------//
  console.log('Shallow Copy');

  const person3 = person1
  person3.age = 28
  console.log(`>> name: ${person1.name}, age: ${person1['age']}`)
  console.log(`>> name: ${person3.name}, age: ${person3['age']}`)

  // Deep Copy ---------------------------------------------------------------//
  console.log('Deep Copy');

  const person4 = {}
  Object.assign(person4, person2)
  person4.age = 16
  console.log(`>> name: ${person2.name}, age: ${person2['age']}`)
  console.log(`>> name: ${person4.name}, age: ${person4['age']}`)

  const fruit1 = { color: 'red' }
  const fruit2 = { color: 'blue', size: 'small' }
  const fruit3 = Object.assign({}, fruit1, fruit2)  // fruit1 is overwritted by fruit2
  console.log(`>> color : ${fruit3.color}, size: ${fruit3['size']}`)
}
