// Leo
// Recursion


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(500, 500, 600);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * random(0.2, 0.85);
    drawCircle(x + newD / 2, y, newD);
    drawCircle(x - newD / 2, y, newD);
    //drawCircle(x, y + d * 0.5, d * 0.5);
  }
}
