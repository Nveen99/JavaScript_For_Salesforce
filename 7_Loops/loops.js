/*07. Loops Learning */

/*
1. Loops as the name suggest are a way to repeat a code block more than once.
2. Loops help you automate repetitive tasks and make the code more efficient
3. Loops tend to run until a specific condition or criteria is true.
*/

// for-loop
let numberList = [25, 35, 12, 45, 12];
for (let i = 0; i < numberList.length; i++) {
    console.log('Number in the numbers list:', numberList[i]);
}

// for-loop of
let playerNames = ['Sachin', 'Sehwag', 'Dhoni'];
for (let player of playerNames) {
    console.log('Players names:', player); //O/p --> Sachin, Sehwag, Dhoni
}

// for- loop of break
for (let player of playerNames) {
    if (player == 'Sehwag') {
        break;
    }
    console.log('Players names:', player);//O/p --> Sachin
}

// for- loop of continue
for (let player of playerNames) {
    if (player == 'Sehwag') {
        continue;
    }
    console.log('Players names:', player);//O/p --> Sachin,Dhoni 
}

//for-loop in
let employeeInfo = {
    empName: 'Naveen Kumar',
    empPhone: '12456',
    empGender: 'Male',
    empAge: 32,
    empAddress: { village: 'Gajwel', Town: 'Hyderabad', Country: 'India' },
    empSkills: ['Admin', 'Apex', 'LWC', 'OmniStudio', 'Flows']
}
console.log('Employee Info:', employeeInfo);


// for-loop in
for (let keys in employeeInfo) {
    //console.log(keys); //o/p-->  object keys will display
    console.log(`${keys}-${employeeInfo[keys]}`);
}


// 1. Write a for loop to print even numbers from 2 to 20.
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log('Print even number:', i);
    }
}

// 2. Use a while loop to calculate the factorial of a number.

let num = 5;
let factorial = 1;

while (num > 1) {
    factorial = factorial * num;
    num--;
}

console.log('factorial value of 5 is:', factorial); // Output: 120


// 3. Write a for...of loop to display all items in a shopping cart array.
let shoppingFruitsList = ['Apples', 'Banana', 'Mango', 'Grapes'];
for (let fruits of shoppingFruitsList) {
    console.log('fruits List:', fruits);
}


// 4. Create a program using for...in to display the keys and values of a student object.
let studentDetails = {
    stdName: 'Naveen',
    stdAge: 16,
    stdEmail: 'naveen@gmail.com',
    stdPhone: '123456',
    stdSkills: ['Admin', 'Apex', 'LWC']
}

for (let keys in studentDetails) {
    console.log(`${keys} - ${studentDetails[keys]}`)
}

// 5.Use a loop to find the largest number in an array.
let arrayNumberList = [55, 125, 85, 36, 75.90, 2024, 256];
let largestNumber = arrayNumberList[0];
for (let i = 0; i < arrayNumberList.length; i++) {
    if (arrayNumberList[i] > largestNumber) {
        largestNumber = arrayNumberList[i];
    }
}
console.log('largest array number in array is:', largestNumber); // 2024