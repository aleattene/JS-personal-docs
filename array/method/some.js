/*
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the provided function returns true;
otherwise it returns false.
It doesn't modify the array.
 */

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));  // expected: true

console.log(`-`.repeat(40))

/*
Syntax
    Arrow function
        some((element) => { ... } )
        some((element, index) => { ... } )
        some((element, index, array) => { ... } )

    Callback function
        some(callbackFn)
        some(callbackFn, thisArg)

    Inline callback function
        some(function(element) { ... })
        some(function(element, index) { ... })
        some(function(element, index, array){ ... })
        some(function(element, index, array) { ... }, thisArg)
 */


// TO FIX -> Parameters
// TO FIX -> Return Value
// TO FIX -> Description


// Testing value of array elements (it tests whether any element in the array is bigger than 10)
function isBiggerThan10(element, index, array) {
    return element > 10;
}

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // expected: false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // expected: true

console.log(`-`.repeat(40))

// Testing array elements using arrow functions (same test)

console.log([2, 5, 8, 1, 4].some((x) => x > 10));  // expected: false
console.log([12, 5, 8, 1, 4].some((x) => x > 10)); // expected: true

console.log(`-`.repeat(40))