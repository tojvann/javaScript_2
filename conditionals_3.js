
function setup (){
    createCanvas (600, 400);
  }
  
  function draw(){
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill(); 
    if(mouseX > 250){
        ellipse(300,200,100,100);
    }
    else if(mouseX > 200) {
        rect(300,200,100,100);
    }
    else if(mouseX > 100) {
        line(0,0,600,400);
    }
    else{
        point(300,200);
    }
    

        
  }
  