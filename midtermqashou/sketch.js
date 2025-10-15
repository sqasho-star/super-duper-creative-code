let x;
let y;
let diameter = 25;
let people = [];
let leaves = [];
let windSpeed = 0;
let noisePos = 0; 
let windInc = 0.01;
let walker;
//let Person = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
class Person {
  
  // where you define the traits of a Person *when they are first created* (what they are born with)
  
  constructor() {
    this.pos = createVector(0, height)
    this.speed = random(1, 4)
    this.size = random(10, 30);
    this.color = color(255, 0, 0)
    this.spawnedPerson = false;
  }
  
  // where you handle what a person will do based on their traits
  update() {
    this.pos.x += this.speed
    
    if(this.pos.x > width || this.pos.x < 0) {
      this.speed = -this.speed
      if(this.spawnedPerson == false) {
        people.push(new Person())
        this.spawnedPerson = true;
      }
      
    }
  }
  
  // draw the person based on their traits (which are ever-shifting based on the update methond)
  display() {
    //strokeWeight(0)
    noStroke()
    fill(this.color)
    ellipse(this.pos.x, this.pos.y - this.size/2, this.size)
  }
  
  
}
function setup() {
 
  createCanvas(400, windowHeight);
  people.push(new Person())
  x = random(width);
  y = random(height);
  xSpeed = 2;
  ySpeed = 3;
  walker = new Walker();
  
   myLeaf = new Leaf()
  myLeaf.drawLeaf();
  
}

function draw() {
   background(220);
  stroke(255, 0, 0);
  //stroke(255, 0, 0)
  strokeWeight(2)
  noFill()
  let size = 50
  ellipse(200, 300, size);
  rectMode(CENTER)
  rect(200, 300, 1, size*2);
  rect(200, 300, size*2, 1);
  
    for(let i = 0; i < people.length; i++) {
    let person = people[i]
    person.update()
    person.display()
      
       walker.step();
  walker.show();

  
  //console.log[windSpeed]
  
  //let wind = createVector(0.5, 0)

  // do something every 60 frames
  if(frameCount % 60 == 0) {
    leaves.push(new Leaf())
  }
  
  for(let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    
    leaf.update()
    leaf.drawLeaf()
  }
      
       }
  
//
}
 
  class Walker{
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

function mouseClicked() {
  
  leaves.push(new Leaf())
  
    

}



// this is a template, nothing in here happens until the object actually exists, which happens in other parts of the sketch.

class Leaf {
  constructor() {
    this.pos = createVector(random(width), -1)
    this.vel = createVector(0, 0.5)
    // this.noisePos += windInc;
    this.windSpeed = noise(noisePos) * 30;
    
    
  }
  
  update() {
    this.pos.add(this.vel)
    //this.pos.x+=map(sin(frameCount/20), -1, 1, -3, 3)
    this.vel.x+=map(sin(frameCount/20), -1, 1, -0.1, 0.1)
  }

   drawLeaf() {

    rect(this.pos.x, this.pos.y, 30, 15)
   }
}
