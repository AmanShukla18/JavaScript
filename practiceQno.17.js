// Add the following elements to the container using only javascript and the DOM methods.
// 1. A <p> with red text that says "hey, I'm red!".
// 2. An <h3> with the blue text that says "I'm blue h3!".
// 3. A <div> with black border and pink background color with following elements inside of it:
 // another <h1> that says "I'm in a div".
 //A <p> that says "ME TOO!".




 let para1 = document.createElement('p')
 para1.innerText = "hey, I'm red!"
 para1.style.color = "red"
 document.querySelector('body').append(para1)

 let h3 = document.createElement('h3')
 h3.innerText = "I'm blue h3!"
 h3.style.color = "blue"
 document.querySelector('body').append(h3)

 let div = document.createElement('div')
 div.style.border = "1px solid black"
 div.style.backgroundColor = "pink"
 div.appendChild(document.createElement('h1')).innerText = "I'm in a div"
 div.appendChild(document.createElement('p')).innerText = "ME TOO!"
 document.querySelector('body').append(div)