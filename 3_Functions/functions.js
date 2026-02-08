/*3. Function Learning */

/*
1. Functions are like reusable instruction that perform specify tasks.
2. Functions allows you to write code once and use it multiple time, making your program efficient and organized.
3. you can call a function whenever you need it and many times you want.
*/

/* Function call defined in 3 ways
   1. Function syntax:
   ======================
         function methodName(){
            return logic;
         }
       methodName();


  2nd way function syntax:
  ===========================
  const functionName =function(){
  return logic'
  }
  console.log(functionName);


  3rd way --> Arrow Function
  ================================
  const methodName = ()=>{
    logic
    }
*/

//1. write a function that takes two numbers and return their average;
function numbersAverage(numberOne, numberTwo) {
    let avgNumber = (numberOne + numberTwo) / 2; //  (%-->even or odd check     / → division (average, ratios))
    return avgNumber;
}
let finalResult = numbersAverage(10, 20);
console.log("Average of Two numbers is:", finalResult);

//2.Create a function that accepts a string and returns length

function myFullName(fname, lname) {
    let myName = fname + lname;
    return myName;
}

let myNameResult = myFullName("Naveen Kumar", "Thumoji");
console.log("My Full name is:", myNameResult);
console.log("My Full name is:", myNameResult.length);

//3. write a function that check if a number is even or add
function givenNumberIsEvenOrOdd(number) {
    //let numberGiven = (number%2===0)
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let finalOutput = givenNumberIsEvenOrOdd(6);
console.log("Given number is:", finalOutput); //output --> Even

//4.create a function to calculate the area of rectangle (length*width)
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}

let areaOutput = areaOfRectangle(256, 252);
console.log("Area of Rectangle is:", areaOutput);

//5. Write an arrow function that takes a name and returns a welcome message.
const givenName = (name) => {
    return "Hello " + name + ", Welcome to Salesforce Make Sense"; // ${name} --> this also we can use
};
let finalMessage = givenName("Naveen");
console.log("finalMessage:", finalMessage);
