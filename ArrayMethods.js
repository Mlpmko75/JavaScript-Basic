//! Array Methods
//? 1. reduce()-Reduce Array to a Single Value

// let numbers=[10,20,30];

// let total=numbers.reduce((acc,curr)=>acc+curr,0);
// console.log(total);

//! 2. slice() vs .splice()-know the Difference
//? slice(start, end)-Non-destructive

// let arr=[1,2,3,4,5];
// console.log(arr.slice(1,3))//[2,3]

//?splice(start,deleteCount, ...items)-Destructive

// let colors=["Red","Grren","Blue"];
// colors.splice(2,2,"Yellow")
// console.log(colors);

//! 3.splice(start, deleteCount, ...items)-Modify Original Array

// let fruits=["Apple","Banana","Mango"];
// fruits.splice(1,0,"Orange");
// console.log(fruits);

//!4. concat() &.flat
//?concat()-Combine arrays

// let a=[1,2];
// let b=[3,4];
// let c=a.concat(b);
// console.log(c);

//flat()-Flattters nested array( 1 level by default)

// let nested = [1, [2, 3], [4, 5]];
// console.log(nested.flat());

//! 5. Spread Operator...
// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];
// console.log(newArr);

//! 6. Destructuring Array
let [a, b, c] = [10, 20, 30];
console.log(a); 
console.log(c); 
console.log(b); 
let [first, , third] = ["One", "Two", "Three"];
console.log(third); 

