let aboutButtonElement = document.getElementById('aboutButton');
let timeToVisitButtonElement = document.getElementById('timeToVisitButton');
let attractionsButtonElement = document.getElementById('attractionsButton');
let aboutTabElement = document.getElementById('aboutTab');
let timeToVisitTabElement = document.getElementById('timeToVisitTab');
let attractionsTabElement = document.getElementById('attractionsTab');

timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function aboutButtonClicked() {
    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.add("selected-button");
    timeToVisitButtonElement.classList.remove('selected-button');
    attractionsButtonElement.classList.remove("selected-button");
}

function timeToVisitButtonClicked() {
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.add('selected-button');
    attractionsButtonElement.classList.remove("selected-button");
}

function attractionsButtonClicked() {
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.remove('selected-button');
    attractionsButtonElement.classList.add("selected-button");
}
