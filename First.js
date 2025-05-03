console.log("Aman Shukla");
let a = 10;
let b = 5;
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(++a); 







// else if statement

  // Grading System

  let marks = 80;

  if (marks >= 90) {
      console.log("O");
  }
  else if (marks >= 80) {
      console.log("A+");
  }
  else if (marks >= 70) {
      console.log("A");
  }
  else if (marks >= 60) {
      console.log("B");
  }
  else if (marks >= 50) {
      console.log("C");
  }
  else if (marks >= 40) {
      console.log("D");
  }
  else if (marks>= 33 ) {
      console.log("P");
  }
  else if (marks < 33) {
      console.log("F");
  }
  


// Season identifer

let month = "August";

if (month === "November,January") {
    console.log("Winter is going on...!");
}

else if (month === "April") {
    console.log("Summer is going on....!");
}

else if (month === "August") {
    console.log("Monsoon is there...!");
}


let age1 = 17;

if (age1 >= 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// traffic signal


let color = "blue";

if (color === "red") {
    console.log("Stop, the light color is red");
}
else if (color === "yellow") {
    console.log("slow down, the light color is yellow");
}

else if (color === "green") {
    console.log("Go, the light color is green");
}

else {

    console.log("The traffic signal is broken")
}


// Nested if else statement


let marks1 = 81;

if (marks1 >= 33) {
    console.log("Pass");

    if (marks1 >= 80) {
        console.log("O");
    }
    
    else {
        console.log("A");
    }
}

else {
    console.log("Fail, better luck next time")
}


// Switch statement

let colour = "green";

switch (colour) {
    case "red" :
        console.log("Stop");
        break;
        case "yellow" :
        console.log("Slow DOwn");
        break;
        case "green" :
        console.log("Go"); 
        break;
        deafult :
        console.log("the light is broken")   
}


