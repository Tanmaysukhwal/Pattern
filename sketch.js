function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(255);
  let leafWidth = 40;
  let leafHeight = 80;
  let spacing = 50;

  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      drawLeaf(x, y, leafWidth, leafHeight);
    }
  }
}

function drawLeaf(x, y, w, h) {
  beginShape();
  fill(34, 139, 34);
  noStroke();
  
  // Left side of the leaf
  vertex(x, y);
  bezierVertex(x - w / 2, y - h / 4, x - w / 2, y + h / 4, x, y + h / 2);
  
  // Right side of the leaf
  bezierVertex(x + w / 2, y + h / 4, x + w / 2, y - h / 4, x, y);
  
  endShape(CLOSE);
  
  // Draw the leaf vein
  stroke(0);
  line(x, y, x, y + h / 2);
}
