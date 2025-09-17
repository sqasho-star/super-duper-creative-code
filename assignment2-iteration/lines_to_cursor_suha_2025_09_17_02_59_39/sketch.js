function setup() {
  createCanvas(400, 400);
  strokeWeight(3)
  stroke(171, 26, 33)
}

function draw() {
  background(220);
  line(10, 10, mouseX, mouseY);
  
  let spacing = width/11
  for(let i=1; i < 11; i++)
{
  
line(i * spacing, 10, mouseX, mouseY)
}  
}