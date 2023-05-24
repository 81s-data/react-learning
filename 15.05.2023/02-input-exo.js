let colorPickers = [document.getElementById('redColor'),
document.getElementById('greenColor'),
document.getElementById('blueColor')]

// let colorPickers = document.querySelectiorAll('input[type="range"]'); marche aussi

for (const colorPicker of colorPickers) {
    colorPicker.addEventListener('input', () => {
        // document.body.style.backgroundColor = rgb(colorPickers[0].value, colorPickers[1].value, colorPickers[2].value); FAUX car rgb n'est pas une fonction
        let rgbCode = `rgb(${colorPickers[0].value}, ${colorPickers[1].value}, ${colorPickers[2].value})`;
        // let rgbCode = `rgb(${redColor.value}, ${greenColor.value}, ${blueColor.value})`; marche aussi
        document.body.style.backgroundColor = rgbCode;
        document.getElementById('rgbCode').innerText = rgbCode;
        document.body.style.color = `rgb(${255 - colorPickers[0].value}, ${255 - colorPickers[1].value}, ${255 - colorPickers[2].value})`;
})}