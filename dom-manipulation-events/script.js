// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const redText = document.createElement('p');
redText.textContent = "Hey I'm red"
redText.style.color = "red";

container.appendChild(redText)

//an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement('h3');
blueText.innerText = "I'm Blue!"
blueText.style.color="blue";

container.appendChild(blueText);

// Create a <div> with a black border and pink background color with the following elements inside of it:
const newDiv = document.createElement('div');
newDiv.style.border = "solid 3px black";
newDiv.style.backgroundColor = "pink";

container.appendChild(newDiv);

// - another <h1> that says “I’m in a div”
const textOne = document.createElement('h1');
textOne.innerText = "I'm in a div";
newDiv.appendChild(textOne);

// - a <p> that says “ME TOO!”
const textTwo = document.createElement('p');
textTwo.innerText = "ME TOO!"
newDiv.appendChild(textTwo)


