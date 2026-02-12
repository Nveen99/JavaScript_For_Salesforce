/*16. Set Time Learning  */
/*
setTimeOut:
           Execute a function after waiting a specified no of milliseconds.
     ==>    setTimeout(function,millisceonds);

to stop  execution of the function specified in
          setTimeout();
          clearTimeout(Timeoutvarianle);


 setInterval:
       same as setTimeOut(), but repeats the execution of the function continuosly.
          ==>   setInterval(function,milliseconds);
 
to stops the execution of function specified in the setInterval()mmethod.
         clearInterval(timer variable);

*/

/*

setTimeout(() => {
    console.log('Timeout Started');
}, 5000);

*/

let timeIntervalDetails = "";
timeIntervalDetails = setInterval(() => {
    console.log('TimeInterval done');
}, 5000);

setTimeout(() => {
    clearInterval(timeIntervalDetails);
    console.log('Interval Processing is stoped');
}, 15000);