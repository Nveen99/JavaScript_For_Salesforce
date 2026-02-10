/* 09. This Key word Learning */

/* 
1. One of the most important yet confusing concepts in JavaScript.
2. It refers to the current context in which your code is running.
3. The value of this depends on how and where it is used.
4. this is a reference to an object that is executing the current piece of code.
5. In a constructor function: this refers to the newly created object.
6. In an event handler function: this refers to the element that triggered the action.

*/

//this in a normal object method

let myName = {
    name: 'Naveen',
    greet: function () {
        console.log(this.name);
    }
};
myName.greet(); //o/p--> Naveen

//this in a function (global context)
function show() {
    console.log(this);
}
show();


//this inside a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person("Naveen", 25);
console.log(p1.name); // Naveen


//this in an event handler
function clickMe() {
    console.log(this);
}
clickMe();


//this in arrow functions
const obj = {
    name: "Naveen",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined