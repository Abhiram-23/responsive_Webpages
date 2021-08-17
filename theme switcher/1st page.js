let bgContainer = document.getElementById('bgContainer');
let heading = document.getElementById('heading');
let theme = document.getElementById('themeUserInput');
dark = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
light = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';

function printKeydown(event) {
    if (event.key === "Enter") {
        console.log(theme.value);
        if (theme.value === 'Dark') {
            bgContainer.style.backgroundImage = dark;
            heading.style.color = "white";
        } else if (theme.value === 'Light') {
            bgContainer.style.backgroundImage = light;
            heading.style.color = "#014d40";
        } else {
            alert('enter the valid theme');
        }
    }
}
theme.addEventListener("keydown", printKeydown);