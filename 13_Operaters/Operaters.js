console.log("Operaters in javaScript");

// Arthematic Operations

let num1 = 10;
let num2 = 30;
console.log(num1 + num2); //o/p =30

let num4 = "10";
let num3 = 30;
console.log(num4 + num3); //o/p = 1030

let num5 = 50;
let num6 = "70";
console.log(num5 + num6); //o/p =5070

let num7 = 520;
let num8 = "90";
console.log(num7 + Number(num8)); //o/p = 610
console.log(num7 - num8); // o/p --> 430
console.log(num7 * num8); // o/p--> 46800
console.log(num7 / num8); // o/p ->5.77778

// Assignmenet operaters '=',
let myCourse = "Salesforce LWC";
console.log(myCourse);
myCourse = "Apex +LWC + Admin";
console.log(myCourse);

//comparision operateres  '==', '===', >,<, !=, <=, >=
let num9 = 90;
let num10 = 150;
console.log(num9 > num10); //false
console.log(num9 < num10); // true
console.log(num9 >= num10); //false
console.log(num9 <= num10); //true
console.log(num9 != num10); //true

// logical Operater AND
console.log(true && false); //fales
console.log(true && true); // true
console.log(num9 < num10 && num9 <= num10); //true

let myName1 = "naveen";
let myName2 = "Kumar";
console.log(myName1 && myName2); // o/p --> Kumar

// OR Operater
console.log(true || false); //true
console.log(true || true); // true
console.log(num9 < num10 || num9 <= num10); //true

let myName3 = "naveen";
let myname4 = "Kumar";
console.log(myName3 || myName4); // o/p --> naveen

// Not operater !
let isSalaryCredited = false;
console.log(isSalaryCredited);
isSalaryCredited = !isSalaryCredited;
console.log(isSalaryCredited);

// ==. === comparision

let num15 = 10;
let num16 = 10;
console.log(typeof num15, typeof num16);
console.log(num15 == num16); //true
console.log(num15 === num16); //true

let num17 = 20;
let num18 = "20";
console.log(typeof num17, typeof num18);
console.log(num17 == num18); //true
console.log(num17 === num18); //false

console.log("naveen" == "Naveen"); //false
console.log("naveen" === "Naveen"); //false
