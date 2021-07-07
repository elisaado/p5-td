const widthSelector = document.getElementById("width");
const heightSelector = document.getElementById("height");
const tileSizeSelector = document.getElementById("tileSize");

function setup() {
  createCanvas(
    tileSizeSelector.value * widthSelector.value,
    tileSizeSelector.value * heightSelector.value
  );
}

function draw() {
  background(220);

  fill(255);
  strokeWeight(2);
  stroke(0);
}
