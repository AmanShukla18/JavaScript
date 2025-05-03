let num = 20;

if (num % 10 == 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}




let aman = prompt("Please enter your name");
let age = prompt("Please enter your age");

alert(`${aman} is ${age} years old`);




let quaters = 1;

switch(quaters) {
    case 1 :
        console.log("January, February, March");
        break;
        case 2 :
        console.log("April, May, June");
        break; 
        case 3 :
        console.log("July, August, September");
        break;
        case 4 :
        console.log("October, November, December");
        break;  
        default:
        console.log("No more months left");      
}   





let String = "Aman Shukla";

if (String[0] === "A" || "a" && String.length > 5) {
    console.log("Good String")
}

else {
    console.log("Not a golden string");
}





let a = 10;
let b = 20;
let c = 30;

if (a > b) {
    if(a > c) {
        console.log(a, ": is largest");
    }
    else {
        console.log(c, ": is largest");
    }
}
else {
    if (b > c) {
        console.log(b, ": is largest");
    }
    else {
        console.log(c, ": is largest");
    }
}






let num1 = 32;
let num2 = 47852;

if ( (num1%10) == (num2%10)) {
    console.log("both the numbers have same last digit");
}
else {
    console.log("numbers dont have last digit");
}