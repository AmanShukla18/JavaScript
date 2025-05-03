let n = prompt("Please enetr a number");
n= parseInt(n);    

for (let i = n; i<=n*10; i = i+n ) {
    console.log(i);
}



// making a game using while loop



const favMovie = prompt("Please enter your favourite movie name");

let guess = prompt("Please guess opnent's favourite movie name");

while ((guess != favMovie) && (guess != "quit")) {
    if (guess == "quit") {
        console.log("You quit the game");         // This is break statement used for coming out from loop;
        break;
    }
    console.log("wrong guess, please try again");
   guess = prompt("please try again");
}

if (guess == favMovie) {
    console.log("you guessed right movie");
} 





//for of loop

let fruits = ["mango", "apple","litchi","banana","orange"];

for (fruit of fruits) {
    console.log(fruit);
}   