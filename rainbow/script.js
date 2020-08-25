var rainbowColor = prompt(
  "Enter a color from the rainbow pallete - ROYGBIV or 'random'"
);

//var normRainbowCol = rainbowColor.toLowerCase();
function randomHexCode() {
  var colPallete = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
  var hexArray = ["#"];
  while (hexArray.length < 7) {
    var randChar = Math.floor(Math.random() * Math.floor(14));
    hexArray.push(colPallete[randChar]);
  }
  return hexArray.join("");
}

var hexCode = "";
switch (rainbowColor.toLowerCase()) {
  case "red":
    hexCode = "#ff0000";
    break;
  case "orange":
    hexCode = "#ff0000";
    break;
  case "yellow":
    hexCode = "#ff0000";
    break;
  case "green":
    hexCode = "#ff0000";
    break;
  case "blue":
    hexCode = "#ff0000";
    break;
  case "indigo":
    hexCode = "#ff0000";
    break;
  case "violet":
    hexCode = "#ff0000";
    break;
  case "random":
    hexCode = randomHexCode();
    alert("randon hexCode generated: " + hexCode);
    break;

  default:
    alert(
      'Please enter a valid color or enter "random" to populate automatically'
    );
    break;
}

//alert(`${rainbowColor} hex code is ${hexCode}`);
setTimeout(() => (document.body.style.backgroundColor = hexCode), 1000);
