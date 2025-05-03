// Write an arrow function that returns the square of number 'n'.

const square = (n) => (
    n * n
);

//Write a function that prints "Hello World" 5 times at the interval of 2s each.

let id = setInterval (() => {
    console.log("Hello World");
}, 2000);

setTimeout (() => {
    clearInterval(id);
}, 10000);