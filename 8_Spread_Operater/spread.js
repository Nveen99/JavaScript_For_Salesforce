/*08.Spread Operator Later */

/*
1. Spread operator is like a magic trick in JavaScript that allows you to “spread out”
       the elements of an array or properties of an object into individual pieces.
2. Spread operator is primarily used to create a copy of an array without modifying the original.
3. It is also used to merge multiple arrays or combine them together.
*/

// Combined the array 
let arrayOldPlayers = ['Sachin', 'Sehwag', 'Dravid'];
let arrayNewPlayers = ['Abhishek', 'Thilak', 'Rinku'];

let combinedPlayers = [...arrayOldPlayers, ...arrayNewPlayers];

console.log('Old Players are:', arrayOldPlayers);
console.log('New Players are:', arrayNewPlayers);
console.log('Combined Players are:', combinedPlayers);

//add player to new playeslist 'Surya'
arrayNewPlayers = [...arrayNewPlayers, 'Surya'];
console.log('added new player:', arrayNewPlayers);


// Expanding string
let myName1 = 'Naveen Kumar';
console.log(myName1); //Naveen Kumar
console.log('My Name expansion:', ...myName1); //o/p-->N a v e e n   K u m a r


//combine object
let fruitDetails = { frtName: 'Apple' };
let vegitableDetails = { vegName: 'Green Chilli' };

let combineDetails = [{ ...fruitDetails, ...vegitableDetails }];
console.log('Combine veg and fruit:', combineDetails);

//copy of an array and object
let myFavFood = ['Biryani', 'Chicken', 'Dosa'];
let myFavFoodCopy = myFavFood;
console.log('My Favorite food:', myFavFood); // 'Biryani', 'Chicken', 'Dosa'
console.log('My Favorite food copy:', myFavFoodCopy); //'Biryani', 'Chicken', 'Dosa'
myFavFoodCopy.push('Motton');
console.log('After added to copyfood: ', myFavFoodCopy); // 'Biryani', 'Chicken', 'Dosa', 'Mutton'
console.log('After added check FavFood: ', myFavFood); //'Biryani', 'Chicken', 'Dosa' ,'Mutton'  // (if we use = 'myFavFoodCopy = myFavFood'we get deep copy)


/*above we got deep copy to resolve that issue we use spread operator(...)   myFavFoodCopy1 = [...myFavFood1] */
let myFavFood1 = ['Biryani', 'Chicken', 'Dosa'];
let myFavFoodCopy1 = [...myFavFood1];
console.log('My Favorite food:', myFavFood1); // 'Biryani', 'Chicken', 'Dosa'
console.log('My Favorite food copy:', myFavFoodCopy1); //'Biryani', 'Chicken', 'Dosa'
myFavFoodCopy1.push('Motton');
console.log('After added to copyfood: ', myFavFoodCopy1); // 'Biryani', 'Chicken', 'Dosa', 'Mutton'
console.log('After added check FavFood: ', myFavFood1); // 'Biryani', 'Chicken', 'Dosa' ,'Mutton'  

// 1. Use the spread operator to copy an array of your favorite cricketers.
let myFavCricketers = ['Sehwag', 'Abhishek', 'Ishan'];
let myfavCricktersCopy = [...myFavCricketers];
console.log('Copy array of palyers:', myfavCricktersCopy);


// 2. Merge two arrays: one for fruits and one for vegetables.
let favFruit = ['Mango', 'Banana'];
let favVegitables = ['tomatoes', 'potatoes'];

let combineBoth = [...favFruit, ...favVegitables];
console.log('Combined both fruit and vegitables:', combineBoth);


// 3. Combine two objects: one with name and age, and another with city and country.
let myDetails = {
    name: 'Naveen Kumar',
    age: 30
}

let myAddress = {
    city: 'Hyderabad',
    country: 'India'
}

let combineMyData = [{ ...myDetails, ...myAddress }];
console.log('My full datails are:', combineMyData);


// 4. Use the spread operator to add numbers from an array into a function that calculates the sum.
let numbersArr = [15, 12, 19, 13, 18];

function calculateSum(a, b, c, d, e) {
    return a + b + c + d + e;
}

let result = calculateSum(...numbersArr);
console.log('total sum of rray numbers:', result);


// 5. Create a new object from an existing one, but overwrite one of the properties with a new value.

let employee = {
    name: "Naveen Kumar",
    role: "Salesforce Admin",
    experience: 2
};

// Create a new object and overwrite one property
let updatedEmployee = { ...employee, role: 'Salesforce Developer', experience: 3 };
console.log('Updated role and Experience:', updatedEmployee);







console.log("Spread operaters");

/* Spread Operaters [...]
1. Expanding String
2. Comning Arrays
3. Combining Objects
4. Shallow copy of Arrays and Objects
*/

// 1. Expanding String
let myName = "My Name is thumoji naveen kumar";
console.log("myName-->", ...myName);

//2. Comning Arrays
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8, 9];
let combinedArrays = [...array1, ...array2];
console.log("combinedArrays", combinedArrays);

addcombinedArrays = [25, 22, 15, ...combinedArrays];
console.log(addcombinedArrays);

addcombinedArrays2 = [...combinedArrays, 100, 101, 102];
console.log(addcombinedArrays2);

//3. Combining Objects
let stdDetails1 = { fname: "Naveen", courses: ["Admin", "Apex", "LWC"] };
let stddetails2 = { lname: "Kumar", age: 32 };
let comninedObje = { ...stdDetails1, ...stddetails2 };
console.log(comninedObje);

//4. Shallow copy of Arrays and Objects
let frtOrrayOriginal = ["Apple", "Mango", "Cherry"];
let frtOrrayCopy = frtOrrayOriginal; // without spread operator
console.log("Original fruits", frtOrrayOriginal);
console.log("Copy fruits", frtOrrayCopy);
frtOrrayCopy.push("Banana");
console.log("Copy fruits", frtOrrayCopy);
console.log("Original fruits", frtOrrayOriginal); // deep Copy we added banana to copy array it added to original

let frtArrayOriginal = ["Apple", "Mango", "Cherry"];
let frtArrayCopy = [...frtOrrayOriginal]; //used spread Shallow copy it copies to Copy only
console.log("Original fruits", frtArrayOriginal);
console.log("Copy fruits", frtArrayCopy);
frtArrayCopy.push("Banana");
console.log("Copy fruits", frtArrayCopy);
console.log("Original fruits", frtArrayOriginal);

//array copying
let stdDetails3 = { fname: "Naveen", courses: ["Admin", "Apex", "LWC"] };
let stdDetailsCopy = stdDetails3;
console.log("stdDetails3", stdDetails3);
console.log("stdDetailsCopy", stdDetailsCopy);

stdDetailsCopy.age = 32;
console.log("Copy stdDetailsCopy", stdDetailsCopy);
console.log("Original stdDetails3", stdDetails3); // deep Copy we added age to copy object it added to original

let stdDetails4 = { fname: "Naveen", courses: ["Admin", "Apex", "LWC"] };
let stdDetailsCopy1 = { ...stdDetails4 }; // used spread added to copy details only
console.log("stdDetails3", stdDetails4);
console.log("stdDetailsCopy", stdDetailsCopy1);

stdDetailsCopy1.age = 32;
console.log("Copy stdDetailsCopy", stdDetailsCopy1);
console.log("Original stdDetails3", stdDetails4);
