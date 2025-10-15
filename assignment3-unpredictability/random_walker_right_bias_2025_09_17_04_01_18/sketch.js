//{!1} Remember how p5.js works? setup() is executed once when the sketch starts.
function setup() {
  createCanvas(640, 240);
  // Create the walker.
  walker = new Walker();
  background(255);
}
//{!1} Then draw() loops forever and ever (until you quit).
function draw() {
  // Call functions on the walker.
  walker.step();
  walker.show();
}

class Walker {
  // Objects have a constructor where they are initialized.
  constructor() {
    // Objects have data.
    this.x = width / 2;
    this.y = height / 2;
  }
    // Objects have methods.
  show() {
    stroke(0);
    point(this.x, this.y);
  }
    step() {
    let r = random(1);
    //{!2} A 40% chance of moving to the right
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }

}
// A Walker object
let walker;



  
