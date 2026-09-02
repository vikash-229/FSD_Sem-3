// The comma operator evaluates multiple expressions from left to right and returns the value of the last expression.
let x = 15;
let result = (x++, x + 2);
console.log(result); // 18

// It can also update two variables in a for loop.
let array = [10, 20, 30, 40, 50];

for (let first = 0, last = array.length - 1; first < last; first++, last--) {
    console.log(array[first], array[last]);
}
