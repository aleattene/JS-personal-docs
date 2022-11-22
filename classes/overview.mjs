/*
Classes
Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
*/

/*
Defining classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations,
the class syntax has two components:
    - class expressions
    - class declarations.
*/

// Class declarations
// One way to define a class is using a class declaration.
// To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
class RectangleFirst {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rect = new RectangleFirst(10,20)
console.log('Object: ', rect);                      // expected: Rectangle { height: 10, width: 20 }
console.log('Rectangle Height:', rect.height);      // expected: Rectangle Height: 10
console.log('Rectangle Width:', rect.width)         // expected: Rectangle Width: 20

console.log(`-`.repeat(40));


/*
 Hoisting
 An important difference between function declarations and class declarations is that
 while functions can be called in code that appears before they are defined,
 classes must be defined before they can be constructed.

 Code like the following will throw a ReferenceError:

    const rect = new Rectangle(); // ReferenceError
    class Rectangle {}

 This occurs because while the class is hoisted its values are not initialized.
 See https://developer.mozilla.org/en-US/docs/Glossary/Hoisting for more details.
*/


// Class expressions
// A class expression is another way to define a class.
// Class expressions can be named or unnamed.
// The name given to a named class expression is local to the class's body.
// However, it can be accessed via the name property.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name for more details.

// unnamed
const RectangleClass = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(RectangleClass.name); // Expected: "RectangleClass"

// named
const Rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle2.name); // Expected: "Rectangle2"

console.log(`-`.repeat(40));

// Note:
// Class expressions must be declared before they can be used
// (they are subject to the same hoisting restrictions as described in the class declarations section).
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_declarations for more details.


/*
 Class body and method definitions
 The body of a class is the part that is in curly brackets {}.
 This is where you define class members, such as methods or constructor.
*/

// To FIX -> Strict Mode

/*
 Constructor
 The constructor method is a special method for creating and initializing an object created with a class.
 There can only be one special method with the name "constructor" in a class.
 A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

 A constructor can use the super keyword to call the constructor of the super class.
 // TO FIX -> Link
 */

/*
 Static initialization blocks
 Static initialization blocks allow flexible initialization of static properties including
 the evaluation of statements during initialization, and granting access to private scope.

 Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods
 (all static items are evaluated in declaration order).
 // TO FIX -> Link
*/

/*
 Prototype methods
 See also method definitions:
 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).
*/

class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }

}

const square = new Rectangle(10, 10);

console.log("Area:", square.area); // Expected: "Area: 100"

console.log(`-`.repeat(40));
