// Write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers.

let arr = [1, 2, 3, 4, 5, 6];

const arrayAverage = (arr) => {

    let total = 0;
    for (let number of arr) {
    total += number;
    }
    return total / arr.length;

};

console.log(arrayAverage(arr));



// Write an arrow function named isEvent() that takes a single number as argument and returns if it is even or not.

let num = 4;

const isEvent = (num) => num % 2 == 0;

