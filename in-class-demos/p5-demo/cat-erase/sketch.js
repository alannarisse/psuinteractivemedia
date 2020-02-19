function setup() {
  // put setup code here
  createCanvas(640,480);
  background(0,0,0);
}

function draw() {
  noStroke();
  fill(255,187,179,80);
  ellipse(320,240,100,100);

  noStroke();
  erase();
  //fill(187,255,179,80);
  ellipse(mouseX,mouseY,100,100);
  // put drawing code here
}

function mousePressed() {
  background(151,232,213);
}
