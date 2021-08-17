let first = document.getElementById('firstNumber');
let second = document.getElementById('secondNumber');
let inp = document.getElementById('userInput');
let success = "Congratulations! You got it right.";
let wrong = "Please Try Again!";
let gameres = document.getElementById('gameResult');

function resetGame() {
    let f1 = Math.random() * 100;
    let f2 = Math.random() * 100;
    first.textContent = Math.ceil(f1);
    second.textContent = Math.ceil(f2);
    inp.value = "";
    gameres.textContent = "";
}
resetGame();

function checkButton() {
    let firstRandom = parseInt(first.textContent);
    let secondRandom = parseInt(second.textContent);
    let userenter = parseInt(inp.value);
    let sumis = firstRandom + secondRandom;
    if (userenter === sumis) {
        gameres.textContent = success;
        gameres.style.backgroundColor = "#028a0f";
    } else {
        gameres.textContent = wrong;
        gameres.style.backgroundColor = "#1e217c";
    }
}