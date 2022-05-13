function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}

function getElement(id) {
    return document.getElementById(id);
}

function spin() {
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;

    if (num1 === num2 && num1 === num3) {
        showMessage();
    } else {
        hideMessage();
    }
}

function showMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add('animated', 'pulse')
}

function hideMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}