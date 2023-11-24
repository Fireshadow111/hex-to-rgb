// Declaring variables
let redOutput = document.getElementById('redOutput');
let grnOutput = document.getElementById('grnOutput');
let bluOutput = document.getElementById('bluOutput');
let calButton = document.getElementById('calButton');

// converting HEX to RGB
function hexToRgb() {
    let hex = document.getElementById('hexInput').value;

    // getting red, green, and blue values
    let red = parseInt(hex.substring(0, 2), 16);
    let grn = parseInt(hex.substring(2, 4), 16);
    let blu = parseInt(hex.substring(4, 6), 16);

    redOutput.value = red;
    grnOutput.value = grn;
    bluOutput.value = blu;

calButton.addEventListener('click', hexToRgb);
}