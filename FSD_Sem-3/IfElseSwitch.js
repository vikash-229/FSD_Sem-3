// if...else example
const age = 20;

if (age >= 18) {
	console.log("You are eligible to vote.");
} else {
	console.log("You are not eligible to vote.");
}

// if...else if...else example
const marks = 75;

if (marks >= 90) {
	console.log("Grade: A");
} else if (marks >= 60) {
	console.log("Grade: B");
} else if (marks >= 40) {
	console.log("Grade: C");
} else {
	console.log("Grade: F");
}

// switch case example
const day = 3;

switch (day) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	default:
		console.log("Invalid day");
}
