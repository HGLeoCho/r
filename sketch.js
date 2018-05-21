// Leo
// Recursion


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(50);
  stroke(255);
  noFill();
  drawCircle(500, 500, 600);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * random(0.3, 0.9);
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
    //drawCircle(x, y + d * 0.5, d * 0.5);
  }
}
