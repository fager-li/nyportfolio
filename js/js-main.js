

//Y = (X-A)/(B-A) * (D-C) + C
// X = input, Y = Output, A-B = Input range, D-C = Output range

var uu;
function setup() {
    
    createCanvas(window.innerWidth, window.innerHeight,WEBGL);

    
}

function draw() {
    rotateAmnt = map(mouseX,0,1440,0,90);
    background(0);
    fill(255);
    strokeWeight(2);
    stroke(51,0,255);

   translate(0,0-20);
    angleMode(DEGREES);
    rotateY(rotateAmnt);
    box(window.innerHeight);
    console.log(rotateAmnt);

    
    
}