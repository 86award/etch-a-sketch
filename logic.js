const container = document.querySelector('.container');
const btn = document.querySelector('button');
// If you wanted a canvas that was 960
let canvasSize = '720px';
container.style.width = canvasSize;
container.style.height = canvasSize;

btn.addEventListener('click', buttonPress)

function buttonPress()
{
    let columns = prompt("Enter number of columns/rows.");
    let rows = columns;
    // Parse the canvasSize to a string
    let pixelSize = (parseInt(canvasSize, 10)) / columns;
    removeAllChildNodes(container);
    drawCanvas(rows, columns, pixelSize);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function drawCanvas(rows, columns, pixelSize)
{
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

    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(element => {
        element.addEventListener('mouseover', () => {
            paintPixel(element);
        })
    });
}

// Need to cache pixel element to obtain width and set container width
// let pixelWidth = document.querySelector('.pixel');
// function setContainerWidth(containerWidth) {
//     let cwString = containerWidth + "px";
//     container.style.width = cwString;
// }
// setContainerWidth(columns * pixelWidth.offsetWidth);

function paintPixel(element) {
    element.style.backgroundColor = 'black';
}