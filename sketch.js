var bat ,ball ;
function setup() {
  createCanvas(800,400);
 bat=createSprite(400, 200, 50, 50);
 ball=createSprite(300,300,60,70);
 bat.shapeColor="pink";
 ball.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  bat.x=mouseX ;
  ball.y=mouseY;
 if(rabbit(bat,ball)){
   bat.shapeColor="red"
   ball.shapeColor="orange"
 }
else{
  bat.shapeColor="pink";
  ball.shapeColor="blue"; 
}

  drawSprites();
}