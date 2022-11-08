/*
The slice() method returns a shallow copy of a portion of an array into a new array object
selected from start to end (end not included) where start and end represent the index of items in that array.
The original array will not be modified.
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));      // expected: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));   // expected: Array ["camel", "duck"]
console.log(animals.slice(1, 5));   // expected: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));     // expected: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));  // expected: Array ["camel", "duck"]

console.log(animals.slice());       // expected: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(`-`.repeat(40));

