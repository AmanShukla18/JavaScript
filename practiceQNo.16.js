// Check if all numbers in our array are multiple of the specified 10 or not.

let nums = [10, 20, 30, 40];

let ans = nums.every((el) => ( el % 10 == 0));

console.log(ans); 


// Create a function to find a minimum number in array.

let muns = [10, 20, 30, 40, 5];

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}