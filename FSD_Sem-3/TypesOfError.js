// Types of errors in JavaScript

// 1. SyntaxError: incorrect JavaScript grammar.
// The following example must remain commented because it stops the whole file.
// const message = "Hello;

// 2. ReferenceError: using a variable that does not exist.
try {
	console.log(undefinedVariable);
} catch (error) {
	console.log("ReferenceError:", error.message);
}

// 3. TypeError: using a value in an invalid way.
try {
	const number = 10;
	number.toUpperCase();
} catch (error) {
	console.log("TypeError:", error.message);
}

// 4. RangeError: using a value outside its allowed range.
try {
	const numbers = new Array(-1);
} catch (error) {
	console.log("RangeError:", error.message);
}

// 5. Logical error: the code runs, but the result is wrong.
const length = 10;
const width = 5;
const area = length * width; // Correct formula: length * width
console.log("Area:", area);
