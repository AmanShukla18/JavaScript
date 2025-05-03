// Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to “Click me”.

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Click me'

document.querySelector('body').append(input);
document.querySelector('body').append(button);




//Qs2.Add following attributes to the element:  -Change placeholde rvalue of input to “username” -Change the id of button to “btn”.

input.placeholder = 'username';
button.id = 'btn';




// Qs3.Access the btn using the querySelector and buttonc id. Change the button background color to blue and text color to white.

let btn = document.querySelector('#btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';





// Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple.

let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
h1.style.textDecoration = 'underline';
h1.style.color = 'purple';

document.querySelector('body').append(h1);





// Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.

let p = document.createElement('p');
p.innerText = 'Apna College \u0026 Delta Practice';
p.style.fontWeight = 'bold';

document.querySelector('body').append(p);