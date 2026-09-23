const Student1 = {
    name : "Vikash",
};
const Student2 = {
    name : "Venkatesh"
};
function introduce(city){
    console.log('My name is ${name} and I live in ${city}');
}
introduce.call(Student1 , "Delhi");
introduce.call(Student2 , "Delhi");