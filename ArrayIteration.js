//! 1.Array Iteration with .forEach()

// let fruits=["apple","banana","orange"];
// fruits.forEach(function(fruit,index){
//     console.log(`${index}.${fruit}`);
// })


//! 2. transforming Array with .map()

// let numbers=[1,2,3];

// let squares=numbers.map(num=>num*num);

// console.log(squares);

//! 3. Filtering Array with  .filter()

// let ages=[12,18,25,30];

// let adults=ages.filter(age=>age>=18);

// console.log(adults);

//! 4.Finding Items with .find() & .indexof()

//?find()

// let users=["John","Meharban","Alice","Mohit"];

// let result=users.find(user=>user.startsWith("M"));
// console.log(result);

//?indexof
// let colors=["Red","Green","Blue"];
// console.log(colors.indexOf("Green"));

//! 5.Sorting Array wiht .sort()

//?Sorting String:

// let names=["Zara","Alex","John"];
// names.sort();
// console.log(names);

//?Sorting Number(needs a compare function):

// let nums=[10,5,20];
// nums.sort((a,b)=>a-b);
// console.log(nums);

//! 6.Prectice Ex:

let students=[
    {name:"John",marks:80},
    {name:"Alice",marks:60},
    {name:"Mohit",marks:90},
    {name:"Rita",marks:70}

];

let topStudents=students.filter(student=>student.marks>75)
// map(student=>student.name.toUpperCase())
// .sort();
console.log(topStudents);
// console.log(topStudentse);