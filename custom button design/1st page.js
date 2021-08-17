let bgcolor = document.getElementById('bgColorInput');
let fontcolor = document.getElementById('fontColorInput');
let fontsize = document.getElementById('fontSizeInput');
let fontweight = document.getElementById('fontWeightInput');
let padding = document.getElementById('paddingInput');
let border = document.getElementById('borderRadiusInput');
let btn = document.getElementById('customButton');
console.log(bgcolor.value, fontcolor)

function apply() {
    btn.style.backgroundColor = bgcolor.value;
    btn.style.color = fontcolor.value;
    btn.style.fontSize = fontsize.value;
    btn.style.fontWeight = fontweight.value;
    btn.style.padding = padding.value;
    btn.style.borderRadius = border.value;
}