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


//