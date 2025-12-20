//! for loops

const { createLogger } = require("vite");

//? Syntax 
// for(initialization; CSSConditionRule; incement.decrement){
      //code to be executed
// }

//? Example

// for(let i=0; i<5;i++){
//     console.log("Mohit Kumar "+i);
// }

//! for in loops

//?Syntax
// for(variable in object){
//     code to be executed
// }

//?Example

let person={fname:"Mohit",lname:"kumr",age:23}

// for(let key in person){
//       console.log(key+":"+person[key]);
// }


//!for of loop

//?Example

// for(variable of iterable){
//       code to be executed
// }

//?Example
// let fruits=["apple","banana","cherry"];
// for(let fruit of fruits ){
//       console.log(fruit);
// }

//Real Example 

// const students=[
//       {
//             name:"Mohit",
//             age:23,

//       },
//       {
//             name:"Rahul",
//             age:24,

//       },
//        {
//             name:"Rahul",
//             age:24,
            
//       },
// ];
// for(let person of students){
//       console.log(person.name)
// }

// for(let key of students){
//       console.log(key.name+" "+key.age)
// }

//!while loops
//?Syntax
//while(condition){
//code block to be exwcuted
//}

//? Example
// let i=0;
// while(i<5){
//       console.log(i)
//       i++;
// }

//?do while loop
// do{
//code block to be executed
//}while(condition);

//?Example
// let i=0;
// do{
//       console.log(i)
//       i++
// }while(i<5);

//?Real Life Example

// let password="";
// let correctPassword="admin";

// do{
//       password=prompt("Enter the password:")
// }while(password!==correctPassword);
// console.log("Access granted!");