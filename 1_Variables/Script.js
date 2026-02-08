               /*  01. Variables */
/*
1. varibles start with-->  $, _, letter
2. variables can store data like number, string, boolean, Object, Array
3. varible are camelCases
4. varible doen not contain spaces.
5. Declare varibles using  'var', 'let', 'const'
*/

//1. Declare a variable favoriteColor and assign it is your favoriteColor. print it to the console.

let favoriteColor='Black';
console.log('My favorite color is:',favoriteColor);

//2. Create two variable price and discount and calculate the log and discounted price.

let price =20000;
let discount = 20;
let actualPrice =(price-(price*discount)/100);
console.log('Product price before discount:', price);
console.log('Discount percentage:', discount);
console.log('Product price after discount:', actualPrice);


//3. update the value of let variable and print the old and new values

let myName='Naveen';
myName ='Naveen Kumar';
console.log('My Name is :',myName);
console.log('After update My Name is:',myName);

// 4. Try assigning new values for const variable and observe whats happen

const myDesignation='Associate Consultant';
// myDesignation='Senior Consultant'; (TypeError: Assignment to constant variable.)
// console.log('My designation is:',myDesignation); (TypeError: Assignment to constant variable.)
console.log('My designation is:',myDesignation); //(output: Associate Consultant)


//5. store your fullname in a variable and log "Hello,[Your Name]! to the console

let myFirstName ='Naveen Kumar';
let myLastName ='Thumoji';
let fullName= myFirstName+myLastName;
let myAge= 32;
let myCity='Hyderabad';
let mySkill='JavaScript';
let myInformation='Hello,My name is '+fullName+', My age is '+myAge+' and I am from '+myCity+'. I am learning '+mySkill+' from Salesforce Make Sense';

console.log('My Full Name is:',fullName);
console.log('My age is:',myAge);
console.log('I am from:',myCity);
console.log('I am learning:',mySkill);
console.log('My Full Details:',myInformation);