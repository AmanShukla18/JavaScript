// Square and sum the array element using arrow function and then find the average if the array.

let nums = [1,2,3,4,5];

const square = nums.map((num)=>num*num);
console.log(square);

let sum = square.reduce((acc,cur)=>acc+cur,0);

let avg = sum/nums.length;

console.log(avg);





//Create a new array using the map function whose each element is equal to original element plus 5.

let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((number)=>number+5));





//Create a new array whose elemments are in upercase od words present in the original array.

let strings = ["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=>string.toUpperCase()));






//Write a function called doubleAndReturnArgs which accepts an array and a variable of arguments.The functionshould return a array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];

doubleAndReturnArgs([1,2,3],4,4); //[1,2,3,8,8]
doubleAndReturnArgs([2],10,4); //[2,20,8]





//Write a function called mergePbejcts that accepts two objects and returns a new obejct which contains all the keys and values of the firist object and second object.

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

mergeObjects({a:1,b:2},{c:3,d:4}); //{a:1,b:2,c:3,d:4}




