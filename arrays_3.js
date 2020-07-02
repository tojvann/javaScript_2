// Constructor Function
var bubbles = [];

function setup() {
    createCanvas(600, 400);
}
function draw(){
    background(0);
    for(var i = 0; i< bubbles.length; i++){
        bubbles[i].display()
        bubbles[i].move();
    }
    if(bubbles.length > 50){
        bubbles.splice(0, 1);
    }

}
function mouseDragged(){
    bubbles.push(new Bubble(mouseX, mouseY));
}

//Constructor function; acts as a template for the object
function Bubble(x,y) {
    this.x = x,
    this.y = y,
    this.display = function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 20, 20);
    },
    this.move = function() {
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    } 
}