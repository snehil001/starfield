var s = [];
var speed;
function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 800; i++){
  	s[i] = new Star();
  }
}

function draw(){
  background(0);
  speed = map(mouseX, 0, width, 0, 50);
  translate(width/2, height/2);
  for(var i = 0; i < s.length; i++){
	  s[i].show();
	  s[i].update();
  }
}