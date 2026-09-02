// 1. Function declaration
function greet(name) {
	return `Hello, ${name}`;
}

console.log(greet("Aman"));

// 2. Function expression
const add = function (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

console.log(add(10, 20));

// 3. Arrow function
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log(multiply(4, 5));

// 4. Anonymous function used as a callback
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(function (number) {
	return number * 2;
});

console.log(doubledNumbers);

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
	console.log("This function runs immediately");
})();

// 6. Function with a default parameter
function welcome(name = "Guest") {
	return `Welcome, ${name}`;
}

console.log(welcome());

// 7. Rest parameter function
function sum(...values) {
	return values.reduce((total, value) => total + value, 0);
}

console.log(sum(1, 2, 3, 4));

// 8. Generator function
function* countToThree() {
	yield 1;
	yield 2;
	yield 3;
}

console.log([...countToThree()]);

// 9. Default Parameter           
function addNumbers(a, b = 5) {
	
}
// Call Back Function 
function display(result) // child function 
{
	console.log(result);
}
function cal(a , b,callback) // parrent function
{
	callback(a+b);
}
cal(10 , 20 , display);