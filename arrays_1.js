var cities = ["New York", "San Francisco", "New Jersey", "Denver", "Houston"];
var index = 0;
function setup (){
    createCanvas (400, 400);
  }
  
  function draw(){
    background(0);
    fill(255);
    textSize(40);
    text(cities[index], 20, 200);
    }

function mousePressed(){
    index = index + 1; 
    if (index == cities.length){
    index = 0;
    }
}

  