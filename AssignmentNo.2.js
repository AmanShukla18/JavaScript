let arr = [7,9,0,-2];

arr.splice(3); //or       arr.pop();


let arr1 = [7,9,0,-2];

arr1.splice(0,1);  //or arr.shift();



/*let str = prompt("Please enetr a string");

if (str.length == 0) {
    console.log("The string is blank");
}
else {
    console.log("The string is not blank");
}*/


/*let char = prompt("Please enter your name");

if (char == char.toLowerCase()) {
    console.log("The string is in lower case");
}
else {
    console.log("The string is in upper case");
}*/ // this additional question;

let char = "Aman Shukla";

//let idx = 3;

/*if (str[3] == str[3].toLowerCase() ) {
    console.log("The is string is in lower case");
}
else {
    console.log("the is not in lower caser");
}*/

let str = ["hello", "a", 23, 64, 99, -6];
let item = 64;

if (str.indexOf(item) != -1) {
    console.log("The element exists in the array");
}
else {
    console.log("The element doesn't exists un the array");
}







let prr = prompt("Please enter your name");

console.log(`original string = ${prr}`);
console.log(`string without spaces = ${prr.trim()}`);