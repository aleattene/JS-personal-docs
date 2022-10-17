
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
function myFun(arg1, arg2, ...correct) {
    console.log(arg1,arg2,correct)
}
myFun(1,2,3,4,5,6,);    // expected output (1,2,[3,4,5,6])

console.log(`-`.repeat(40));


// TO FIX -> The difference between rest parameters and the arguments object
// TO FIX -> From arguments to an array


/*
Using Rest Parameters
In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.
However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth, …, nth
as many arguments that the user includes.
*/

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

/*
Expected Output:
    a, "one"
    b, "two"
    manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array
*/

console.log(`-`.repeat(40));

myFun("one", "two", "three");
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
