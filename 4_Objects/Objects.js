/* 04. Objects Learning */
/*
    1. Objects in js are collections of related data and functionalities, they allow you to group multiple piece of Information together.
    2. Objects are one of most powerful features of the language.
    3. Object is essentially a collection of key value pairs.
    4. We can add, update, delete values from Object
    5. Object is accept array of Objects
    6. keys()--> to get Object keys we uses keys.
    7. values() -->  to get values we use values
    8. entries() --> to get key value pair.
*/

let myInformation = {};

//add values to Object
myInformation.Name = "Naveen Thumoji";
myInformation.age = 32;
myInformation.mySkills = ["Admin", "Apex", "LWC", "OmniStudio"];

console.log("My Information:", myInformation);

// delete mySkills from Object
delete myInformation.mySkills;
console.log("after deleted skills:", myInformation);

//update name in Object

myInformation.Name = "Naveen Kumar";
console.log("updated name:", myInformation); // name updated to --> NAveen Kumar

//keys --> used to get object keys

let objKeys = Object.keys(myInformation);
console.log("Object keys:", objKeys);

//values --> get values
let objValues = Object.values(myInformation);
console.log("Object values:", objValues);

//entries --> to get key and values
let objEntri = Object.entries(myInformation);
console.log("Object Entries :", objEntri);

// 1. Create an object to represent a book with properties like title, author, and pages.
//  Add a method to display its details.

let bookProperties = {}
bookProperties.title = 'Bhagavad Gita';
bookProperties.author = 'Ved Vyasa';
bookProperties.pages = 750;

console.log('Bhagavad Gita BookInfo:', bookProperties);


// 2. Create a car object with properties brand, model, and year. Add a method to update the year.
let carProperties = {
    brand: 'Tata',
    model: 'Nexon EV',
    year: 2024
}
console.log('Car Information:', carProperties);

carProperties.year = 2026;
console.log('Car year updated:', carProperties);




// 3. Write a program to loop through an object representing a 
// student’s grades (subjects as keys, scores as values) and print each subject with its score.

let studentMarks = {
    Telugu: 92,
    Hindi: 89,
    English: 75,
    Maths: 80,
    Science: 88,
    Social: 95
}

for (let subject in studentMarks) {
    console.log(subject + ' : ' + studentMarks[subject]);
}



// 4. Create an object to represent a user with nested properties for name and address. 
// Access and print the city in the address.

let userInfo = {
    name: {
        firstName: 'Naveen',
        lastName: 'Kumar'
    },
    address: {
        street: 'MG Road',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: 500001
    }
};

// Access and print the city
console.log('City:', userInfo.address.city);

// 5. Add a new property dynamically to an existing object and display the updated object. */
let userInfos = {
    name: 'Naveen Kumar',
    age: 25
};

// add new property dynamically
userInfos.city = 'Hyderabad';

// display updated object
console.log('Updated User Info:', userInfos);