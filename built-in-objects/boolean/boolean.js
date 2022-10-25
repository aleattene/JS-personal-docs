// Boolean
// The Boolean object represents a truth value: true or false.

/*
Description
Boolean primitives and Boolean objects
Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.
Any object, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.
For example, the condition in the following if statement evaluates to true.
*/
const x1 = new Boolean(false);
if (x1) {
    console.log(x1); // this code is executed
}

// This behavior does not apply to Boolean primitives.
// For example, the condition in the following if statement evaluates to false.
const x2 = false;
if (x2) {
    console.log(x2); // this code is not executed
}

console.log(`-`.repeat(40));


// Do not use the Boolean() constructor with new to convert a non-boolean value to a boolean value
// Use Boolean as a function or a double NOT instead
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!
// for more details.
// const good = Boolean(expression);    // use this
// const good2 = !!(expression);        // or this
// const bad = new Boolean(expression); // don't use this!

// If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object,
// the new Boolean object has a value of true.
const myFalse = new Boolean(false);   // initial value of false
console.log(myFalse.valueOf()); // expected: false

const g = Boolean(myFalse); // initial value of true
console.log(g.valueOf()); // expected: true

const myString = new String('Hello'); // string object
const s = Boolean(myString);    // initial value of true
console.log(s.valueOf()); // expected: true

console.log(`-`.repeat(40));


//