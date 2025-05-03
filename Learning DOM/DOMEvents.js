let btn = document.querySelector('button');
console.dir(btn);

//btn.onclick = function () {
//    console.log("button was clicked");
//}


btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName);


function sayHello () {
    alert("Hello!");
};

function sayName () {
    
    alert("hey! This is Chhiki!");
};