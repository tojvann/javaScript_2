
var bubbles = [];

function setup() {
    createCanvas(600, 400);
    for(var i = 0; i < 40; i++){
    bubbles[i] = {
        x : random(0, width),
        y : random(0, height),
        // don't make functions within the loop use constructors rather
        display : function() {
            stroke(255);
            noFill();
            //fill(random(255),random(255),random(255));
            ellipse(this.x, this.y, 20, 20);
        },
        move : function() {
            this.x = this.x + random(-10,10);
            this.y = this.y + random(-10,10);
        } 
    }
    }
}
function draw(){
    background(0);
    for(var i = 0; i< bubbles.length; i++){
        bubbles[i].display()
        bubbles[i].move();
    }

}