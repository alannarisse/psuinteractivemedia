function setup() {
  // put setup code here
  createCanvas(640,480);
  bg = loadImage('http://placebear.com/1200/800');
  erase();
}

function draw() {
  noStroke();
  background(bg);

  fill(255,187,179,80);
  ellipse(320,240,100,100);

  noStroke();
  
  //fill(187,255,179,80);
  ellipse(mouseX,mouseY,100,100);
  // put drawing code here
}

function mousePressed() {
  if (bg) {
    bg.remove();
    bg = null;
  }
}
