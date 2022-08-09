let colorOne = document.getElementById('colorSelection-a');
let colorTwo = document.getElementById('colorSelection-b');
let colorThree = document.getElementById('colorSelection-c');

let Angle = document.getElementById("js-angle-input");
let stopOne= document.getElementById("stop_1");
let stopTwo= document.getElementById("stop_2");
let stopThree= document.getElementById("stop_3");

let outputCode = document.getElementById('code');

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${Angle.value}deg, ${colorOne.value} ${stopOne.value}%, ${colorTwo.value} ${stopTwo.value}%, ${colorThree.value} ${stopThree.value}%);`
    document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient(${Angle.value}deg, ${colorOne.value} ${stopOne.value}%, ${colorTwo.value} ${stopTwo.value}%, ${colorThree.value} ${stopThree.value}%)`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert('Gradient Copied!');
}
generateCode();