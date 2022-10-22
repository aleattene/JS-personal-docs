/*
The filter() method creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);    // expected output: Array ["exuberant", "destruction", "present"]
console.log(words);     // expected output: Array ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

console.log(`-`.repeat(40));