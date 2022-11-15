/*
The every() method tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));  // expected: true

console.log(`-`.repeat(40));

/*
 Syntax
 - Arrow function
    every((element) => { ... })
    every((element, index) => { ... })
    every((element, index, array) => { ... })

 - Callback function
    every(callbackFn)
    every(callbackFn, thisArg)

 - Inline callback function
    every(function (element) { ... })
    every(function (element, index) { ... })
    every(function (element, index, array) { ... })
    every(function (element, index, array) { ... }, thisArg)
*/

// TO FIX -> Parameters
// TO FIX -> Return value
// TO FIX -> Description


// Examples
// Testing size of all array elements
// The following example tests whether all elements in the array are bigger than 10.
function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // expected: false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // expected: true

console.log(`-`.repeat(40));