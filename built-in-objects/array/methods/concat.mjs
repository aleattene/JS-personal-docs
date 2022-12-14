/*
The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new Array instance.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more details.
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);

console.log(`array1:`, array1);   // no modified
console.log(`array2:`, array2);   // no modified
console.log(`array3:`, array3);   // expected: Array ["a", "b", "c", "d", "e", "f"]


console.log(`-`.repeat(40));

/*
Possibilities:
    concat()
    concat(value0)
    concat(value0, value1)
    concat(value0, value1, … , valueN)

Parameters:
    valueN (Optional)

Arrays and/or values to concatenate into a new array.
If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.
See https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy for more details.
*/

const array4 = array3.concat()

console.log(`array3:`, array3);   // no modified
console.log(`array4:`, array4);   // shallow copy

console.log(`-`.repeat(40));

/*
The concat method creates a new array.
The array will first be populated by the elements in the object on which it is called.
Then, for each argument, its value will be concatenated into the array — for normal objects or primitives,
the argument itself will become an element of the final array;
for arrays or array-like objects with the property Symbol.isConcatSpreadable set to a truthy value,
each element of the argument will be independently added to the final array.

The concat method does not recurse into nested array arguments.

The concat() method is a copying method.
It does not alter this or any of the arrays provided as arguments but instead returns a shallow copy
that contains the same elements as the ones from the original arrays.

The concat() method preserves empty slots if any of the source arrays is sparse.

The concat() method is generic.
The "this" value is treated in the same way as the other arguments (except it will be converted to an object first),
which means plain objects will be directly prepended to the resulting array,
while array-like objects with truthy @@isConcatSpreadable will be spread into the resulting array.
 */

// Concatenating two arrays
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);

console.log(`letters:`, letters);  // no modified
console.log(`numbers:`, numbers);  // no modified
console.log(`alphaNumeric:`, alphaNumeric);  // expected: ['a', 'b', 'c', 1, 2, 3]

console.log(`-`.repeat(40));


// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const number123 = num1.concat(num2, num3);

console.log(`num1: `, num1);
console.log(`num2: `, num2);
console.log(`num3: `, num3);
console.log(`numbers123: `, number123);   // expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(`-`.repeat(40));


// Concatenating values to an array
const threeLetters = ["a", "b", "c"];

const ThreeAlphaNumeric = threeLetters.concat(1, [2, 3]);

console.log(`ThreeLetters: `, letters);
console.log(`ThreeAlphaNumeric: `, ThreeAlphaNumeric);    // expected: ['a', 'b', 'c', 1, 2, 3]

console.log(`-`.repeat(40));


// Concatenating nested arrays (demonstrates retention of reference)
const nestedNum1 = [[1]];
const nestedNum2 = [2, [3]];

const nestedNumbers = nestedNum1.concat(nestedNum2);

console.log(`NestedNum1:`, nestedNum1);
console.log(`NestedNum2:`, nestedNum2);
console.log(`NestedNumbers: `, nestedNumbers);   // expected: [[1], 2, [3]]

// Modify the first element of num1
nestedNum1[0].push(4);

console.log(`NestedNum1:`, nestedNum1);
console.log(`NestedNum2:`, nestedNum2);
console.log(`NestedNumbers: `, nestedNumbers); // expected: [[1, 4], 2, [3]]

console.log(`-`.repeat(40));


// Using concat() on sparse arrays (if any of the source arrays is sparse, the resulting array will also be sparse)
console.log([1, , 3].concat([4, 5])); // expected: [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // expected: [1, 2, 3, empty, 5]

console.log(`-`.repeat(40));


// TO FIX -> Concatenating array-like objects with Symbol.isConcatSpreadable
// TO FIX -> Calling concat() on non-array objects
