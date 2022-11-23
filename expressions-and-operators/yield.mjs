/*
 The yield operator is used to pause and resume a generator function.
 See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* for more details.
*/

function* foo(index) {
    while (index < 2) {
        yield index;    // ???
        index++;
    }
}

const iterator = foo(0);

console.log(iterator.next().value); // expected output: 0   ???
console.log(iterator.next().value); // expected output: 1   ???


// Syntax:
//      [rv] = yield [expression]
//
//      - expression (optional)
//      Defines the value to return from the generator function via the iterator protocol.
//      If omitted, undefined is returned instead.
//
//      - rv (optional)
//      Retrieves the optional value passed to the generator's next() method to resume its execution.


// TO FIX -> Description


// Example
// The following code is the declaration of an example generator function.
function* countAppleSales() {
    const saleList = [3, 7, 5];
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}

// Once a generator function is defined, it can be used by constructing an iterator as shown.
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }


