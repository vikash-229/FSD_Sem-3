// Global Scope
let a = 10;
let b = 30;
function addnumber(a, b) {
    console.log(a+b);
}
console.log(a+b);

// block scope 
if(true)
{
    let x = 10;
    let y = 30;
    console.log(x);
    console.log(y);
}

// Hoisting 

console.log(name);
var name = "vikash";  // undefined output 
//console.log(age);
//let age = 20;   // reference error because of let and cont if we print firt then error occure that is temperor dead zone appear.

// TDZ start 
//let Age = 20;
// TDZ end 
// the period between entring a scope and initialise with data type let and const  occure TDZ 

// Closer 
// the closer occure inner function remeber the variable of outer function even the outer variable finished .

function outer()
{
    let counter = 0;
    function inner()
    {
        counter++;
        console.log(counter);
    }
    return inner;

}
 let i = outer();
