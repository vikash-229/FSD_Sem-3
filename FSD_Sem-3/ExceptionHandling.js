// handle the error
// it has three parts try, catch and finally = finally executes no matter what, whether there is an error or not
try {
    let a = 10;
    console.log(a);
    console.log(b);
} catch (error) {
    console.log(error.message);
}
finally{
    console.log("This will execute regardless of an error");
}
// Custom Error user define error 
function checkAge(age){
    if(age < 18){
        throw new error("not eligible to vote");
    }
    console.log("eligible to vote");
}
try{
    checkAge(15);
} catch(error){
    console.log(error.message);
}
