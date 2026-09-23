console.log("A"); // synchronous
setTimeout(()=>{
   console.log("B");
},10)

console.log("C");