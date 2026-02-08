            /* 02. Arrays learning */

/*
1. arrays are a way to store multiple pieces of data in a single variable
    eg: let mixingData = [20,'Naveen'];
2. Each value is stored a specific value is called - 'Index'.
3. Array creation can be done using-  [].
*/

               /*Array Methods */

/*
1. push -- It is used to add item to end/last of array
2. unShift -- It is used to add item to first of array
3. pop  -- It is used to remove item to end/last of array
4. shift -- It is used to remove item to first of array
5. index - It is used to find specific element in array
6. include()- It is used to find item in an array
7. length - It is used to count the length of array
8. reduce --> to calculate math function (like sum,min,max,avg)
9. Map --> is used to transform each item in an array
10.Filter --> pick some values from Array [like even or odd only the items that match a condition]
11. find --> search the item in array
12. sort --> it will give ascending or descending order
13. Slice --> cut & copy (does NOT change original array)
14.Splice --> cut & change (DOES change original array)

*/

let myMarks =[92,90,95,85,80,86];
console.log('My marks subject wise:' +myMarks);


//push -- It is used to add item to end/last of array

myMarks.push(99);
console.log('adding marks at end using push:' +myMarks); //99--> added last 


//unShift -- It is used to add item to first of array

myMarks.unshift(78);
console.log('adding marks at first using unshift:' +myMarks); //78 --> added first


//pop  -- It is used to remove item to end/last of array
myMarks.pop(99);
console.log('removing marks at last using pop:' +myMarks); //99 --> remove  last


//shift -- It is used to remove item to first of array
myMarks.shift(78);
console.log('removing marks at first using shift:' +myMarks); //78 --> remove  first


//index - It is used to find specific element in array
let marksIndex= myMarks.indexOf(85);
console.log('My marks index is:' +marksIndex); //3-- index 

marksIndex= myMarks.indexOf(95);
console.log('My marks index is:' +marksIndex); //2 -- index



// include()- It is used to find item in an array
let myMarksHaving =myMarks.includes(95);
console.log('My marks are include this :' +myMarksHaving); // true

myMarksHaving =myMarks.includes(55);
console.log('My marks are include this :' +myMarksHaving); // false


//length - It is used to count the length of array
let lengthMarksList = myMarks.length;
console.log('My marks length is:' +lengthMarksList);  //6-length





//1.create an array of your 5 favourite movies. add a new movie to list, then remove first

let myFavouriteMovies = ['BusinessMan','Maharshi','Singam','Kick','Bhahubali'];

myFavouriteMovies.push('Kalki'); //push --> add last
console.log('my movies after added: '+myFavouriteMovies); //Kalki--> added last

myFavouriteMovies.shift('BusinessMan'); //shift --> remove first
console.log('my movies after removed 1st movie: '+myFavouriteMovies); // BusinessMan--> remove 1st


//2.write a function to takes an array of numbers and returns new array with only even numbers

let myNumbers =[1,5,10,16,8,12,9,3,7];
console.log('My numbers are :'+myNumbers);

// to get even numbers we use filter()
let evenNumber =myNumbers.filter(numbers=>(numbers%2)===0);
console.log('Even numbers:'+ evenNumber); //even numbers--> [10,16,8,12]

//to get odd numbers we use filter()
let oddNumber =myNumbers.filter(numbers=>(numbers%2)===1);
console.log('odd numbers:'+ oddNumber); //odd numbers -->1,5,9,3,7


//3. create a array of product prices.Use reduce() to calculate the total price

let productPrices=[100,120,150,250,525];
let productTotalPrice = productPrices.reduce((product,price)=>product+price,0);
console.log('Product Total price:',productTotalPrice); //output --> 1145 



//4. Sort an array student grades eg:[85,92,75,88,55,73]  in desc order
let studentMarks=[85,92,75,88,55,73];
let stdMarksDesc= studentMarks.sort((a,b)=>b-a); //this for array of numbers
console.log('Student marks decending order:',stdMarksDesc); // descending order --> [92, 88, 85, 75, 73, 55]



 studentMarks=[85,92,75,88,55,73];
let stdMarksAsc= studentMarks.sort((a,b)=>a-b); //this for array of numbers
console.log('Student marks Ascending order:',stdMarksAsc); // ascending  order --> [55, 73, 75, 85, 88, 92]



let studNames=['naveen','Thumoji','Chary','Kumar'];
studNames.sort();
console.log(studNames); //output-->  ["Chary", "Kumar", "Thumoji", "naveen"] --> why naveen last? -->**Case Sensitive

studNames=['Naveen','Thumoji','Chary','Kumar'];
studNames.sort();
console.log(studNames); //output --> ['Chary', 'Kumar', 'Naveen', 'Thumoji']-->case Insensitive


//5. find the first fruit in an array starts with the letter 'M'

let myFavoriteFruits = ['Apple','Mango','Guava','Grapes'];
let fruitLetterWithM = myFavoriteFruits.find(fruits=>fruits.startsWith('M'));
console.log('Fruit starts with M:'+fruitLetterWithM); //Mango



// Map --> to transform the array values
let productPricesWitOuttaxes = [200,252,595,321];
let productPriceWithTaxes =productPricesWitOuttaxes.map(products=>products*1.5);
console.log('Product prices with taxes:',productPriceWithTaxes); //output -- [300, 378, 892.5, 481.5]


//slice --cut & copy (does NOT change original array)
let fruits = ['Apple', 'Mango', 'Banana', 'Grapes'];
let result = fruits.slice(1, 3);
console.log(result);
console.log(fruits);

// Splice --> cut & change (DOES change original array) remove/add

//remove element
let fruitsSpl = ['Apple', 'Mango', 'Banana', 'Grapes'];
let removed = fruitsSpl.splice(1, 2);
console.log(removed);
console.log(fruitsSpl);

// add element
let fruitsSplice = ['Apple', 'Banana'];
fruitsSplice.splice(1, 0, 'Mango');
console.log(fruitsSplice);

//replace element
let fruitsList = ['Apple', 'Mango', 'Banana'];
fruitsList.splice(1, 1, 'Grapes');
console.log(fruitsList);