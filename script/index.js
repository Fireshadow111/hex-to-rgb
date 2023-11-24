
let hexInput = document.getElementById('hexInput');
let rgbOutput = document.getElementById('rgbOutput');
let calButton = document.getElementById('calButton');

calButton.addEventListener('click', function hexToRgb() {
  let hexValue = hexInput.value;

  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(hexValue)) {
    // Extract RGB components from the HEX value
    let r = parseInt(hexValue.substring(1, 3), 16);
    let g = parseInt(hexValue.substring(3, 5), 16);
    let b = parseInt(hexValue.substring(5, 7), 16);

    rgbOutput.value = `RGB(${r}, ${g}, ${b})`;
  } else {
    alert('Please enter a valid HEX color code');
  }
});