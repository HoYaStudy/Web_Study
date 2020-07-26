"use strict";
{
  // class -------------------------------------------------------------------//
  console.log("class");

  class Shape {
    publicField = 0;
    #privateField = 0;

    // constructor
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // getter
    get width() {
      return this._width;
    }

    // setter
    set width(width) {
      this._width = width;
    }

    getArea() {
      return this.width * this.height;
    }

    static display() {
      return "I am a static method";
    }
  }

  const shape1 = new Shape(3, 5);
  console.log(`>> `, shape1);
  console.log(`>> ${shape1.getArea()}`);

  shape1.width = 5;
  console.log(`>> `, shape1);

  shape1.height = 3;
  console.log(`>> `, shape1);

  console.log(`>> Public: ${shape1.publicField}`); // Can access
  console.log(`>> Private: ${shape1.privateField}`); // Can't access

  console.log(`>> Static Method: ${Shape.display()}`);

  // extends -----------------------------------------------------------------//
  console.log("class: extends");

  class Triangle extends Shape {
    getArea() {
      return (this.width * this.height) / 2;
    }
  }

  const triangle = new Triangle(2, 5);
  console.log(`>> `, triangle);
  console.log(`>> ${triangle.getArea()}`);
  console.log(`>> Static Method: ${Triangle.display()}`);
}
