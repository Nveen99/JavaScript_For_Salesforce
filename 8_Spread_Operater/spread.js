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
let myName = 'Naveen Kumar';
console.log(myName); //Naveen Kumar
console.log('My Name expansion:', ...myName); //o/p-->N a v e e n   K u m a r


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