// 1. for loop
console.log("For loop:");
for (let count = 1; count <= 5; count++) {
	console.log(count);
}

// 2. while loop
console.log("While loop:");
let number = 1;
while (number <= 5) {
	console.log(number);
	number++;
}

// 3. do...while loop
console.log("Do...while loop:");
let value = 1;
do {
	console.log(value);
	value++;
} while (value <= 5);

// A do...while loop runs at least once, even when the condition is false.
let firstAttempt = 10;
do {
	console.log("This runs once");
} while (firstAttempt < 5);
