//{!1} Remember how p5.js works? setup() is executed once when the sketch starts.
function setup() {
  createCanvas(400, 400);
  // Create the walker.
  walker = new Walker();
  background(random(255), random(255), random(255));
}
//{!1} Then draw() loops forever and ever (until you quit).
function draw() {
  // Call functions on the walker.
  walker.step();
  walker.show();
  //ellipse(200, 200, 50);
}

class Walker {
  // Objects have a constructor where they are initialized.
  constructor() {
    // Objects have data.
    this.x = width/2;
    this.y = height/2;
  }
    // Objects have methods.
  show() {
    stroke(random(255), random(255), random(255));
    point(this.x, this.y);
  }
  step() {
    //{!1} 0, 1, 2, or 3. The random choice determines the step.
    let choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
// A Walker object
let walker;



  
