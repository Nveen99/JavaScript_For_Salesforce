/* 05. Events Learning */

/*
1. Events in JavaScript are actions or occurrences that happen in the browser,
         such as a user clicking a button, typing in a text field, or resizing the window.
2. Events allow your code to react to user interactions and browser behavior.
3. Common events are click, keydown, and mouseover.
4. Events are listened to, and an action is taken once that event occurs.
5. Everything you do in LWC will revolve around handling events.
6. You will listen to and dispatch events to enable communication between two components.
7. You will also use events in LWC to pass data from one component to another.
*/


// Add and remove Event Listener
let addBtn = document.getElementById('addBtn');
let removeBtn = document.getElementById('removeBtn');

function showMessage() {
    console.log('Event is active');
}
//add event listener
addBtn.addEventListener('click', showMessage);
//remove event listener
removeBtn.addEventListener('click', function () {
    addBtn.removeEventListener('click', showMessage);
    console.log('Event removed');
});


//handle button click
function sayHello() {
    alert('Hello World!');
}


//handler hover actions 
let box = document.getElementById('box');
//mouseover 
box.addEventListener('mouseover', function () {
    box.style.backgroundColor = 'green';
    console.log('Mouse entered');
});

//mouseout
box.addEventListener('mouseout', function () {
    box.style.backgroundColor = 'lightblue';
    console.log('Mouse left');
});



// 1. Write a program where clicking a button changes the text inside a paragraph.
let button = document.getElementById('clickButton');
let paragraph = document.getElementById('myId');

//addEventListener to get id from html
button.addEventListener('click', function () {
    paragraph.textContent = 'Welcome to Salesforce Make Sense LWC Sessions';
});


// 2. Create a form with a text input. Log the input value every time the user types.
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');

firstName.addEventListener('input', function () {
    console.log(firstName.value);

});

lastName.addEventListener('input', function () {
    console.log(lastName.value);

});



// 3. Add a hover effect to an image that changes its border color.
let boxHover = document.getElementById('boxColor');
//mouseOver
boxHover.addEventListener('mouseover', function () {
    boxHover.style.backgroundColor = 'red';
    console.log('Mouse entered');
});
//mouseOut
boxHover.addEventListener('mouseout', function () {
    boxHover.style.backgroundColor = 'yellow';
    console.log('Mouse left');
});

// 4. Create a program that logs “Key pressed!” every time any key is pressed.
let keyPressedCheck = document.getElementById('myInput');
keyPressedCheck.addEventListener('keypress', function () {
    console.log('Key pressed!');
});

// 5. Write a program to stop listening for a button click after it’s clicked once.
let buttonCheck = document.getElementById('onceBtn');
function handleClick() {
    console.log('Button clicked once!');
    // Stop listening after first click
    buttonCheck.removeEventListener('click', handleClick);
}
buttonCheck.addEventListener('click', handleClick);