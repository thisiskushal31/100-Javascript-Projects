let colorOne = document.getElementById('colorSelection-a');
let colorTwo = document.getElementById('colorSelection-b');
let currentDirection = 'to right';
let outputCode = document.getElementById('code');

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".arrowButtons button");
    for (let i of directions) {
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert('Gradient Copied!');
}
generateCode();