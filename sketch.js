// Leo
// Recursion


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(300, 300, 400);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * random(0.25 * 0.84);
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
    //drawCircle(x, y + d * 0.5, d * 0.5);
  }
}
