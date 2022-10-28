
/*
Unary Plus (+)
The unary plus operator (+) precedes its operand and evaluates to its operand
but attempts to convert it into a number, if it isn't already.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion for more details.
*/

const x = 1;
const y = -1;

console.log(+x);        // expected: 1
console.log(+y);        // expected: -1
console.log(+'');       // expected: 0
console.log(+true);     // expected: 1
console.log(+false);    // expected: 0
console.log(+'hello');  // expected: NaN

console.log(`-`.repeat(40));

/*
Description
Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting
something into a number, because it does not perform any other operations on the number.
It can convert string representations of integers and floats, as well as the non-string values true, false, and null.
Integers in both decimal and hexadecimal (0x-prefixed) formats are supported.
Negative numbers are supported (though not for hex).
Using the operator on BigInt values throws a TypeError.
If it cannot parse a particular value, it will evaluate to NaN.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN for more details.
*/

// Examples
// Usage with numbers

console.log(+x);    // expected: 1
console.log(+y);    // expected: -1

// Usage with non-numbers

console.log(+true)  // expected: 1
console.log(+false) // expected: 0
console.log(+null)  // expected: 0

// const value = +function(val) { return val; } // NaN     ???
// console.log(+1n)    // throws TypeError: Cannot convert BigInt value to number

console.log(`-`.repeat(40));
