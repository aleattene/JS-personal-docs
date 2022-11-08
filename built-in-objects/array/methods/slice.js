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

/*
 Syntax
    slice()
    slice(start)
    slice(start, end)
*/

/*
 Parameters
    start (optional)
        Zero-based index at which to start extraction.
        A negative index can be used, indicating an offset from the end of the sequence.
        slice(-2) extracts the last two elements in the sequence.
        If start is omitted or undefined, slice starts from the index 0.
        If start is greater than the length of the sequence, an empty array is returned.
    end (optional)
        The index of the first element to exclude from the returned array.
        slice extracts up to but not including end.
        For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
        A negative index can be used, indicating an offset from the end of the sequence.
        slice(2,-1) extracts the third element through the second-to-last element in the sequence.
        If end is omitted or undefined, slice extracts through the end of the sequence (arr.length).
        If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
*/

/*
 Returned Values: a new array containing the extracted elements.
*/

/*
 Description
    The slice() method is a copying method.
        It does not alter this but instead returns a shallow copy
        that contains some of the same elements as the ones from the original array.
    The slice() method preserves empty slots.
        If the sliced portion is sparse, the returned array is sparse as well.
    The slice() method is generic.
        It only expects that this value to have a length property and integer-keyed properties.
*/


// Examples
// Return a portion of an existing array
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

console.log(fruits);    // expected: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus);    // expected: ['Orange','Lemon']

console.log(`-`.repeat(40));


// Using slice
// In the following example, slice creates a new array, newCar, from myCar.
// Both include a reference to the object myHonda.
// When the color of myHonda is changed to purple, both arrays reflect the change.
// Using slice, create newCar from myCar.
const myHonda = {
    color: 'red',
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2 }
};
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);

console.log('myCar =', myCar);      // expected: myCar = [{ color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 }}, 2, 'cherry condition', 'purchased 1997']
console.log('newCar =', newCar);    // expected: newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]

console.log('myCar[0].color =', myCar[0].color);    // expected: myCar[0].color = red
console.log('newCar[0].color =', newCar[0].color);  // expected: newCar[0].color = red

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is', myHonda.color);  // expected: The new color of my Honda is purple

console.log('myCar[0].color =', myCar[0].color);    // expected: myCar[0].color = purple
console.log('newCar[0].color =', newCar[0].color);  // expected: newCar[0].color = purple

console.log(`-`.repeat(40));


// Calling slice() on non-array objects
// The slice() method reads the length property of this.
// It then reads the integer-keyed properties from start to end and defines them on a newly created array.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));  // expected: [ 3, 4 ]    ???

console.log(`-`.repeat(40));


// Using slice() to convert array-like objects to arrays
// The slice() method is often used with bind() and call()
// to create a utility method that converts an array-like object into an array.
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
    return slice(arguments);
}

const list1 = list(1, 2, 3);
console.log(list1); // expected: [1, 2, 3]      ???

console.log(`-`.repeat(40));


// Using slice() on sparse arrays
// The array returned from slice() may be sparse if the source is sparse.
console.log([1, 2, , 4, 5].slice(1, 4)); // expected: [2, empty, 4]

console.log(`-`.repeat(40))

