function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";
  let randomColor = "#";
  for (let index = 0; index < 6; index++) {
    let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);
    let randomHexChar = hexChars[randomHexCharIdx];
    randomColor += randomHexChar;
  }
  return randomColor;
}

let colorGen = getRandomHexColor();

document.getElementById("workArea").style.backgroundColor = colorGen;

document.createElement;

//Assign random background color to div and hexCodedisplay on click using JS
