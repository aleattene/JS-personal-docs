/*
The find() method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.
*/
const array = [5, 12, 8, 130, 44];

const found = array.find(element => element > 10);

console.log(found); // expected: 12

console.log(`-`.repeat(40));

/*
    - If you need the index of the found element in the array, use findIndex().
    - If you need to find the index of a value, use indexOf().
        (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
    - If you need to find if a value exists in an array, use includes().
        Again, it checks each element for equality with the value instead of using a testing function.
    - If you need to find if any element satisfies the provided testing function, use some().
*/


/*
 Syntax
 - Arrow function
    find((element) => { ... })
    find((element, index) => { ... })
    find((element, index, array) => { ... })

 - Callback function
    find(callbackFn)
    find(callbackFn, thisArg)

 - Inline callback function
    find(function (element) { ... })
    find(function (element, index) { ... })
    find(function (element, index, array) { ... })
    find(function (element, index, array) { ... }, thisArg)
*/

// TO FIX -> Parameters

// Return value
// The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

// TO FIX -> Description


// Examples
// Find an object in an array by one of its properties
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));  // expected: { name: 'cherries', quantity: 5 }

console.log(`-`.repeat(40));


// Using arrow function and destructuring
const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // expected: { name: 'cherries', quantity: 5 }

console.log(`-`.repeat(40));


// Find a prime number in an array
// The following example finds an element in the array that is a prime number
// (or returns undefined if there is no prime number)
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // expected: undefined (not found)
console.log([4, 5, 8, 12].find(isPrime)); // expected: 5

console.log(`-`.repeat(40));


// Using find() on sparse arrays
// Empty slots in sparse arrays are visited, and are treated the same as undefined.
// Declare array with no elements at indexes 2, 3, and 4
const array2 = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array2.find((value, index) => {
    console.log("Visited index ", index, " with value ", value);
});
// Expected:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

console.log(`-`.repeat(40));


// Shows all indexes, including deleted
array2.find((value, index) => {
    // Delete element 5 on first iteration
    if (index === 0) {
        console.log("Deleting array2[5] with value ", array2[5]);
        delete array2[5];
    }
    // Element 5 is still visited even though deleted
    console.log("Visited index ", index, " with value ", value);
});
// Expected:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6

console.log(`-`.repeat(40));


// Calling find() on non-array objects
// The find() method reads the length property of this and then accesses each integer index.
const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)),); // expected: 7.3     ???

console.log(`-`.repeat(40));