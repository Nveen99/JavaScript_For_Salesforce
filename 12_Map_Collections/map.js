/*12. Map Learning   */

console.log("Loops");
let myCars = ["Tata", "Maruthi", "BMW", "Skoda"];

// normal for loop
for (let i = 0; i < myCars.length; i++) {
    console.log(`${i + 1}. ${myCars[i]}`);
}

/* for loop having 2 type
1. for loop of--> to see the list values
2.for loop in --> to get the Index or key from Object/Array

syntax: for
 
for(Intitialisation i;condition;increment/decrement){
}

for(let integer i=0;i<=10;i++){
consolose.log('print the data')
}

//for loop of
for(let currentitem of array/obj){
console.log(currentitem.array);
}


// for loop in
for(let currentitem of array/obj){
console.log(currentitem.array);
}

for loop object is having methods
1. object.entries()
2. object.keys()
3. object.values()


**insted of current item we can use the destruction


Map id having the below method
1. map.set(key,value)
2.map.get(key)
3.map.has(key)
4.map.size;
5.map.delete(key)
6.map.clear()

*/
let myMap = new Map();
console.log(myMap);

//add element to empty map
myMap.set(1, "Naveen");
myMap.set(true, "isValid");
myMap.set(32, "age");
console.log(myMap);

//access the elements

console.log(myMap.get(1));

// to see size
console.log(myMap.size);

let favPlaces = new Map([
    ["Hyderabad", "Charminar"],
    ["Aagra", "TajMahal"],
    ["tirupathi", "tirumala"],
]);

console.log(favPlaces);

for (let currentitem of favPlaces) {
    console.log(currentitem);
}

for (let [key, values] of favPlaces) {
    console.log(key, values);
}

/* 
Set
1. new set()
2. add()
3.clear()
4.has()
5.delete()
*/

let mySet = new Set();
console.log(mySet);

//add value to set
mySet.add("Biryani");
mySet.add("friedrice");
mySet.add("Eggrice");
mySet.add("chickerice");
mySet.add("Biryani");
mySet.add("mottonrice");
console.log(mySet);

//has value
console.log(mySet.has("mottonrice"));

//delete
console.log(mySet.delete("mottonrice"));
console.log(mySet);
