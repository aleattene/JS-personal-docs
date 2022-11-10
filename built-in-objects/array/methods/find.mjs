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


// Syntax