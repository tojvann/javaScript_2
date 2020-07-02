//while loop
function setup (){
    createCanvas (600, 400);
  }
  
  function draw(){
    var x = 0;  
    background(0);
    stroke(255);
    strokeWeight(4);
    for(var x = 0; x <= mouseX ; x += 50) {
        for(var y = 0; y <= mouseY ; y += 50) {
    
        fill(random(255), random(255), random(255));
        ellipse(x, y, 25, 25);   
        }
    }
}


  