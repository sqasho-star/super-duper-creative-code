function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(36, 48, 214);
  fill(9, 56, 14)
  let x=200; 
  ellipse (x, height/2, 200, 200,); 
  //x=x+5
  x+=5;
  
  fill(222, 96, 38)
  triangle(200, 0, 50, 50, 100, 100);
  fill(118, 48, 171)
  triangle(100, 100, 50, 50, 0, 200);
  fill(0, 0, 0)
  triangle(0, 0, 100, 100, mouseX, mouseY)
  
}