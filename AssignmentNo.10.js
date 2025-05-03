// s1.Try out the following events in EventListener on your own: -mouseout, -keypress, -Scroll, -load.

let div = document.querySelector("div");
div.style.backgroundColor = "red"

document.addEventListener('mouseover', function() {
    console.log('You hovered over the element!');
});

document.addEventListener('mouseout', function() {
    console.log('You left the element!');
});

document.addEventListener('keypress', function(event) {
    console.log('You pressed the key: ' + event.key);
});

document.addEventListener('scroll', function() {
    console.log('You scrolled the page!');
});

// Qs2.Create a button on the page using JavaScript. Addaneventlistener to the button that changes the button’s color to green when it is clicked.

let button = document.createElement('button');
button.innerText = 'Click me';
button.style.backgroundColor = 'blue';

document.querySelector('body').append(button);

button.addEventListener('click', function() {
    button.style.backgroundColor = 'green';
});


// Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page in side HTML. The purpose of this in put element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading.

let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your name';

let heading = document.createElement('h2');
heading.innerText = 'Your name is: ';

document.querySelector('body').append(input);
document.querySelector('body').append(heading);

input.addEventListener('input', function() {
    heading.innerText = 'Your name is: ' + input.value;
});
