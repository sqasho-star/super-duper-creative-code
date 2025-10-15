let img1;

function preload() {
    img1 = loadImage("images/cheesecakepuffy.jpeg")
}


function setup() {
    createCanvas(400, 400);
}

function draw() {

    image(img1, 40, 40, 100, 200)
    text("asdas", 10, 20)
}