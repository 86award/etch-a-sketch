const container = document.querySelector('.container');

// If you wanted a canvas that was 960
let canvasSize = '720px';

container.style.width = canvasSize;
container.style.height = canvasSize;

let columns = 32;
let rows = 32;

// Parse the canvasSize to a string
let pixelSize = (parseInt(canvasSize, 10)) / columns;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        // pixel.setAttribute('style', `width : ${pixelSize}px`);
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        container.appendChild(pixel);
    }
}
// Need to cache pixel element to obtain width and set container width
// let pixelWidth = document.querySelector('.pixel');
// function setContainerWidth(containerWidth) {
//     let cwString = containerWidth + "px";
//     container.style.width = cwString;
// }
// setContainerWidth(columns * pixelWidth.offsetWidth);

let pixels = document.querySelectorAll('.pixel');

pixels.forEach(element => {
    element.addEventListener('mouseover', () => {
        paintPixel(element);
    })
});

function paintPixel(element) {
    element.style.backgroundColor = 'black';
}