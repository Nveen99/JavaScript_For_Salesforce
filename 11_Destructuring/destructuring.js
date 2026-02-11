/*11_ Destructuring Leaning */

let myFavFruits = ['Apple', 'Mango', 'Banana'];

/*
// This is traditional version 

let myFavFruit1 = myFavFruits[0];
let myFavFruit2 = myFavFruits[1];
let myFavFruit3 = myFavFruits[2];

console.log(myFavFruit1);
console.log(myFavFruit2);
console.log(myFavFruit3);
*/

myFavFruits = ['Apple', 'Mango', 'Banana'];
// this is destructuring
let [myFavFruit1, myFavFruit2, myFavFruit3] = myFavFruits;
console.log(myFavFruit1);
console.log(myFavFruit2);
console.log(myFavFruit3);

// to fetch remail fruits we use ...rest
let myFavFruits1 = ['Apple', 'Mango', 'Banana', 'Grapes'];
[favFruit1, ...rest] = myFavFruits1;
console.log(favFruit1);
console.log(rest);

//if we want to skip 'Mango' we use ,
[myFavFruit1, , myFavFruit2] = myFavFruits;
console.log(myFavFruit1);
console.log(myFavFruit2);
//console.log(myFavFruit3);


let myDetails1 = {
    myName: 'Naveen',
    myAge: 32,
    mySkill: 'LWC'
};
// if we want to skip no need to give space
let { myName: FirstName, mySkill } = myDetails1;
console.log('myName', FirstName);
console.log("MySkill", mySkill);







console.log("Destrucring Learnig");

let myFavColors = ["Red", "yellow", "Black"];
// let myFavColors1 = myFavColors[0];
// let myFavColors2 = myFavColors[1];
// let myFavColors3 = myFavColors[2];

let [myFavColors1, myFavColors2, myFavColors3] = myFavColors;
console.log(myFavColors);

let [FavColors1, ...rest] = myFavColors;
console.log(myFavColors);

let [FvvColors1, , FvvColors3] = myFavColors;
console.log(myFavColors);

let myDetails = {
    fname: "Naveen",
    age: 32,
    city: "Hyderabad",
};

let { fname, age } = myDetails;
console.log(myDetails);
console.log(myDetails.fname);
console.log(myDetails.age);

//String Interpolation

let myNameForm = "My Name is:";
let myName = "Naveen Thumoji";
let myAgeis = "My Age is";
let myAge = 32;
let myCityIs = "Hyderabad";

//let finalString = "My Name is" + myName + myAgeis + myAge + myCityIs;
let finalString = `My Name is ${myName}, My age is ${myAge} and My City is ${myCityIs} `;

console.log(finalString);
