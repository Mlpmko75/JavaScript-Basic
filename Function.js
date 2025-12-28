//!-Function Declaration
// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));

//!-function Expression

const greet2=function(name){
    return `Hello, ${name}`;
}
console.log(greet2("Mrheagsbdn"));

//Arrow function

const greet3=(name)=>{
    return `Hello, ${name}!`;
}
console.log(greet3("Mohit Decodes"))

//?

const greet4=name=>`Hello, ${name}!`;
console.log(greet4("Meharban"));