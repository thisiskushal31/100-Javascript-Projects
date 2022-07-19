let calcDisplay = document.getElementById('calc-display')
let resultDisplay = document.getElementById('result-display')

function display(num) {
    calcDisplay.innerText += num;
}

function allClear() {
    calcDisplay.innerHTML = "";
    resultDisplay.innerHTML = "0";
}

function del() {
    calcDisplay.innerText = calcDisplay.innerText.slice(0,-1);
}

function calculate() {
    resultDisplay.innerText = eval(calcDisplay.innerText);
}