/*
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
The default sort order is ascending, built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
*/
const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();

console.log(months);    // expected output: Array ["Dec", "Feb", "Jan", "March"]

console.log(`-`.repeat(40));

const array1 = [1, 30, 4, 21, 100000];

array1.sort();

console.log(array1);    // expected output: Array [1, 100000, 21, 30, 4]

console.log(`-`.repeat(40));


/*
Syntax
- Functionless
  sort()

- Arrow function
  sort((a, b) => { ... } )

- Compare function
  sort(compareFn)

- Inline compare function
  sort(function compareFn(a, b) { ... })
*/


// TO FIX -> Parameters
// TO FIX -> Return value

// TO FIX -> Description


// Creating, displaying, and sorting an array
const stringArray = ['Blue', 'Humpback', 'Beluga'];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ['80', '9', '700'];
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
}

console.log(stringArray.join()); // expected output: 'Blue,Humpback,Beluga'
console.log(stringArray.sort()); // expected output: ['Beluga', 'Blue', 'Humpback']

console.log(`-`.repeat(40));

console.log(numberArray.join()); // expected output: '40,1,5,200'
console.log(numberArray.sort()); // expected output: [1, 200, 40, 5]
console.log(numberArray.sort(compareNumbers)); // expected output: [1, 5, 40, 200]

console.log(`-`.repeat(40));

console.log(numericStringArray.join()); // expected output: '80,9,700'
console.log(numericStringArray.sort()); // expected output: ['700', '80', '9']
console.log(numericStringArray.sort(compareNumbers)); // expected output: ['9', '80', '700']

console.log(`-`.repeat(40));

console.log(mixedNumericArray.join()); // expected output: '80,9,700,40,1,5,200'
console.log(mixedNumericArray.sort()); // expected output: [1, 200, 40, 5, '700', '80', '9']
console.log(mixedNumericArray.sort(compareNumbers)); // expected output: [1, 5, '9', 40, '80', 200, '700']

console.log(`-`.repeat(40));