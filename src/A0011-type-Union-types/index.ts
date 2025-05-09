function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Invalid arguments');
}
console.log(addOrConcat(1, 2)); // 3
console.log(addOrConcat('Hello, ', 'World!')); // Hello, World!
// console.log(addOrConcat(1, 'World!')); // Error: Invalid arguments
// console.log(addOrConcat('Hello, ', 2)); // Error: Invalid arguments
// console.log(addOrConcat(true, false)); // Error: Invalid arguments
// console.log(addOrConcat([1, 2], [3, 4])); // Error: Invalid arguments
