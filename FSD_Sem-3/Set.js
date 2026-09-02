// set timeout() particular time ke baad output display ho 
console.log("start")
setTimeout(()=>{
    console.log("excute now")
},5000); // 5000 means 5 second ke baad output display hoga
console.log("stop");
// Set Interval() ek particular interval ke baad data print hota hai jabtak condition true hai
let count = 1;
let timer = setInterval(()=>{
    console.log(count);
    count++;
    if(count == 6)
    {
        clearInterval(timer);
    }
},5000);

