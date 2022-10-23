/*
The filter() method creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);    // expected output: Array ["exuberant", "destruction", "present"]
console.log(words);     // expected output: Array ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

console.log(`-`.repeat(40));


/*
 Syntax
 - Arrow function
    filter((element) => { ... } )
    filter((element, index) => { ... } )
    filter((element, index, array) => { ... } )
 - Callback function
    filter(callbackFn)
    filter(callbackFn, thisArg)
 - Inline callback function
    filter(function(element) { ... })
    filter(function(element, index) { ... })
    filter(function(element, index, array){ ... })
    filter(function(element, index, array) { ... }, thisArg)
*/


// TO FIX -> Parameters
// TO FIX -> Return value
// TO FIX -> Description


// Filtering out all small values
// The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);  // expected: Array [12, 130, 44]

console.log(`-`.repeat(40));


// Find all prime numbers in an array
// The following example returns all prime numbers in the array.
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // expected: Array [2, 3, 5, 7, 11, 13]

console.log(`-`.repeat(40));


// Filtering invalid entries from JSON
// The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);   // expected: Filtered Array [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries); // expected: Number of Invalid Entries = 5

console.log(`-`.repeat(40));


// Searching in array
// The following example uses filter() to filter array content based on search criteria.
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // expected: Array ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // expected: Array ['banana', 'mango', 'orange']

console.log(`-`.repeat(40));


// Using filter() on sparse arrays
// filter() will skip empty slots.
console.log([1, , undefined].filter((x) => x === undefined));   // expected: [undefined]
console.log([1, , undefined].filter((x) => x !== 2));           // expected: [1, undefined]

console.log(`-`.repeat(40));


// Calling filter() on non-array objects
// The filter() method reads the length property of this and then accesses each integer index.
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"),); // expected: Array [ 'a', 'b' ]


// TO FIX -> Calling filter() on non-array objects