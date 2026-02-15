// option-2 click event handler

function makeYellow() {
  document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// option-3 get element by id and set on click handler

const btnMakeBlue = document.getElementById('btn-blue');
// console.log(btnMakeBlue)
btnMakeBlue.onclick = function () {
  document.body.style.backgroundColor = 'blue';
};

// option-3.1 get element by id and set on click handler
const makePurple = document.getElementById('make-purple');
makePurple.onclick = purple;
function purple() {
  document.body.style.backgroundColor = 'purple';
}
