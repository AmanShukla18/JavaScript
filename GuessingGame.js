const max = prompt("Enter max number");

const random = math.floor(math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("You quit the game");
        break;
    }

    if(guess == random) {
        console.log(`Your guess is correct , the random number was : ${random}`);
        break;
    }
    else if(guess < random) {
        guess = prompt("hint: your guess is too small, Please try again ");
    }
    else {
        guess = prompt("hint: your guess too large, Please try again ");
    }
}