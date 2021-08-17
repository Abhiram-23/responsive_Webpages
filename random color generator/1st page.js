let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerElement = document.getElementById('bgContainer');
let buttonElement = document.getElementById('button');

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function clickMe() {
    let numberOfLength = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfLength);
    let randomColor = bgColorsArray[randomColorIndex];

    bgContainerElement.style.backgroundColor = randomColor;
}