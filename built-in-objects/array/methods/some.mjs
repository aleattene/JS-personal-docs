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

console.log(`-`.repeat(40));

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

console.log(`-`.repeat(40));

// Testing array elements using arrow functions (same test)

console.log([2, 5, 8, 1, 4].some((x) => x > 10));  // expected: false
console.log([12, 5, 8, 1, 4].some((x) => x > 10)); // expected: true

console.log(`-`.repeat(40));


// Checking whether a value exists in an array (it mimics the includes () method)
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, 'kela'));   // expected: false
console.log(checkAvailability(fruits, 'banana')); // expected: true

console.log(`-`.repeat(40));


// Checking whether a value exists using an arrow function (TO FIX ONLINE -> Open Source)
console.log(fruits.some((arrVal) => arrVal === 'kela'));   // expected: false
console.log(fruits.some((arrVal) => arrVal === 'banana')); // expected: true

console.log(`-`.repeat(40));


// Converting any value to Boolean
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
    if (typeof value === 'string') value = value.toLowerCase().trim();
    return TRUTHY_VALUES.some((t) => t === value);
}

console.log(getBoolean(false));   // expected: false
console.log(getBoolean('false')); // expected: false
console.log(getBoolean(1));       // expected: true
console.log(getBoolean('true'));  // expected: true

console.log(getBoolean(false, 'true'));  // expected: false  ???
console.log(getBoolean('true', false));  // expected: true  ???

console.log(`-`.repeat(40));


// Using some() on sparse arrays (some() will not run its predicate on empty slots)
console.log([1, , 3].some((x) => x === undefined));     // expected: false
console.log([1, , 1].some((x) => x !== 1));             // expected: false
console.log([1, undefined, 1].some((x) => x !== 1));    // expected: true

console.log(`-`.repeat(40));


// TO FIX -> Calling some() on non-array objects