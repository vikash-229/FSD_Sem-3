
function calculate(a , b , operation)
{
    return operation(a,b);
}
function add(x,y)
{
   return x+y;
}
function multiply(x,y)
{
    return x*y;
}
console.log(calculate(10, 30, add));

//.Map
let number = [1,2,3,4,5];
//for(i =0;i<number.length;i++)
//{
  //  number[i] = number[i]*2;
//}
let squares = number.map(function(number)
{
    return number*number;
});

console.log(squares);

// .Filter
let evenNumbers = number.filter(function(number)
{
    return number % 2 === 0;
});

console.log(evenNumbers);

// Reduce 
let numbers =  [10,20,30,40,50]
//let total = numbers.reduce((sum,numbers)=>
  let max = numbers.reduce((max,number)=>
{   
    //return sum+numbers;
    return numbers>max? numbers:max;
},numbers[0]);
console.log(max);


