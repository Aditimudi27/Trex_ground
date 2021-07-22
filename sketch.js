var edges;
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation('trex1.png','trex3.png','trex4.png');

}

function setup(){
  createCanvas(600,200)
  edges=createEdgeSprites();
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation('running',trex_running);
 trex.scale=0.5;
 trex.x=50;
}

function draw(){
  background("skyblue");
  console.log(trex.y);
  if(keyDown('space')){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(edges[3]);
  drawSprites();

}

