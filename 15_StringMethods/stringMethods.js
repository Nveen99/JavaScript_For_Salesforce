console.log("String Methods");

let myDetails = "My name is Naveen Kumar";
console.log(myDetails);

//check length
console.log(myDetails.length);

//toupper(), lowercase()
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

let name1 = "Naveen";
let name2 = "Kumar";
let fullname = name1.concat(name2);
console.log(fullname);
// or we can use string Interpoletation
console.log(`${name1} ${name2}`);

//trim(), trimStart(), trimEnd()
let mySelf = "      Naveen Kumar salesforce       ";
console.log(mySelf.trim()); // it will trim starting and ending spaces
console.log(mySelf.trimStart()); // starting space will remove
console.log(mySelf.trimEnd()); // ending space will remove

let fruitsArray = "Apple, banana, Mango"; //nee to take string
console.log(fruitsArray);

let replaceArray = fruitsArray.replace("banana", "grape"); // replace is applied to string
console.log(replaceArray);

let text = "Apple, banana, Mango";
console.log(text);

// to extract the string we use Slice(), substr(), substring()
let newText = text.slice(7, 14);
console.log(newText); // Banana

let newTextq = text.slice(7);
console.log(newTextq); // Banana,mango

let substringBanana = text.substring(7, 14);
console.log(substringBanana);

let mystr = "5";
let updatedStr = mystr.padStart(5, 0);
console.log(updatedStr);

let mystr1 = "5";
let updatedStr1 = mystr1.padEnd(5, 0);
console.log(updatedStr1);

//split ==> it convert string into array
let text1 = "Apple, banana, Mango";
let updatedtext1 = text1.split();
console.log(updatedtext1);

//index of && includes
let text2 = "Apple, banana, Mango";
console.log(text2.indexOf("Apple"));
console.log(text2.includes("Apple"));
console.log(text2.includes("cherry"));

//startwith,endwith
console.log(text2.startsWith("Apple"));
console.log(text2.endsWith("cherry"));
