// option-2 click handler using function method 
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

function makeTomato() {
  document.body.style.backgroundColor = 'tomato'
}

// option-3 click handler using getElementById and set to function method
const makePurple = document.getElementById('btn-purple');
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
}

// option-3.1 simple differnce click handler using getElementById and set to function method

const makeYellow = document.getElementById('btn-yellow');
makeYellow.onclick = yellow;

function yellow() {
  document.body.style.backgroundColor = 'yellow';
}


const headings = document.getElementsByTagName('h1')

for (const heading of headings) {
  heading.style.color = 'aqua'
  heading.style.backgroundColor = 'crimson'
  heading.style.padding = '20px'
  heading.style.borderRadius = '10px'
}


