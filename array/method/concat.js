/*
The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new Array instance.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more details.
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(`array3:`, array3);   // expected: Array ["a", "b", "c", "d", "e", "f"]
console.log(`array1:`, array1);   // no modified
console.log(`array2:`, array2);   // no modified

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
console.log(`array4:`, array4);   // shallow copy
console.log(`array3:`, array3);   // no modified
