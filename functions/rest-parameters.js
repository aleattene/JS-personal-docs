
/*
 Rest Parameters
 The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
 providing a way to represent variadic functions in JavaScript.
 See https://en.wikipedia.org/wiki/Variadic_function for more details.
*/

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));      // expected output: 6
console.log(sum(1, 2, 3, 4));   // expected output: 10

console.log(`-`.repeat(40));


// Syntax
function f(a, b, ...theArgs) {
    // …
}


/*
Description
A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters),
which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array.
Only the last parameter in a function definition can be a rest parameter.
 */

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Expected Output:
    // a, one
    // b, two
    // manyMoreArgs, ["three", "four", "five", "six"]

console.log(`-`.repeat(40));


// A function definition can have only one ...restParam.
// Wrong -> foo(...one, ...wrong, ...wrong)

// The rest parameter must be the last parameter in the function definition.
// Wrong -> foo(...wrong, arg2, arg3)
// Correct
function myFunOne(arg1, arg2, ...correct) {
    console.log(arg1,arg2,correct)
}
myFunOne(1,2,3,4,5,6,);    // expected output (1,2,[3,4,5,6])

console.log(`-`.repeat(40));


// TO FIX -> The difference between rest parameters and the arguments object
// TO FIX -> From arguments to an array


/*
Using Rest Parameters
In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.
However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth, …, nth
as many arguments that the user includes.
*/

function myFunTwo(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFunTwo("one", "two", "three", "four", "five", "six");

/*
Expected Output:
    a, "one"
    b, "two"
    manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array
*/

console.log(`-`.repeat(40));

myFunTwo("one", "two", "three");
/*
Expected Output:
    a, "one"
    b, "two"
    manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array
*/

console.log(`-`.repeat(40));

myFun("one", "two");

/*
Expected Output:
    a, "one"
    b, "two"
    manyMoreArgs, [] <-- yip, still an array
*/

console.log(`-`.repeat(40));


// Argument length (since theArgs is an array, a count of its elements is given by the length property)
function fun1(...Args) {
    console.log(Args.length);
}

fun1();               // expected output: 0
fun1(5);        // expected output: 1
fun1(5, 6, 7);  // expected output: 3

console.log(`-`.repeat(40));


/*
Using rest parameters in combination with ordinary parameters
In the next example, a rest parameter is used to collect all parameters after the first parameter into an array.
Each one of the parameter values collected into the array is then multiplied by the first parameter,
and the array is returned
 */
function multiply(multiplier, ...Args) {
    return Args.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);

console.log(arr);   // expected output: [30, 50, 84]

console.log(`-`.repeat(40));


/*
Rest parameters are real arrays; the arguments object is not
Array methods can be used on rest parameters, but not on the arguments object.
*/
function sortRestArgs(...Args) {
    return Args.sort();
}

console.log(sortRestArgs(5, 3, 7, 1));  // expected output: 1, 3, 5, 7

console.log(`-`.repeat(40));

// function sortArguments() {
//     console.log(arguments); // expected output: [Arguments] { '0': 5, '1': 3, '2': 7, '3': 1 }
//     const sortedArgs = arguments.sort();
//     return sortedArgs;  // this will never happen
// }
//
// console.log(sortArguments(5, 3, 7, 1)); // throws a TypeError (arguments.sort is not a function)
console.log("arguments.sort is not a function");

console.log(`-`.repeat(40));


// To use Array methods on the arguments object, it must be converted to a real array first.
function sortRealArguments() {
    const args = Array.from(arguments);
    return args.sort();
}
console.log(sortRealArguments(5, 3, 7, 1)); // expected output: 1, 3, 5, 7

console.log(`-`.repeat(40));