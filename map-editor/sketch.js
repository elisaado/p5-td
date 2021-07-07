const widthSelector = document.getElementById("width");
const heightSelector = document.getElementById("height");
const tileSizeSelector = document.getElementById("tileSize");

widthSelector.oninput = resizeCanvasToInputs;
heightSelector.oninput = resizeCanvasToInputs;
tileSizeSelector.oninput = resizeCanvasToInputs;

function setup() {
  createCanvas(
    tileSizeSelector.value * widthSelector.value,
    tileSizeSelector.value * heightSelector.value
  );
}

function draw() {
  background(220);

  fill(255);
  strokeWeight(1);
  stroke(0);

  for (let i = 0; i <= heightSelector.value; i++) {
    for (let j = 0; j <= widthSelector.value; j++) {
      rect(
        j * tileSizeSelector.value,
        i * tileSizeSelector.value,
        tileSizeSelector.value,
        tileSizeSelector.value
      );
    }
  }
}

function resizeCanvasToInputs() {
  resizeCanvas(
    tileSizeSelector.value * widthSelector.value,
    tileSizeSelector.value * heightSelector.value
  );
}
