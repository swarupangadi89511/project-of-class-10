var sea,ship;
var shipImg,seaImg;

function preload() {
seaImg=loadImage("sea.png");

shipImg1=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup() {
  createCanvas(400,400);
background("blue");
 sea= createSprite(200,200);
sea.addImage(seaImg);
sea.velocityX=-5;
sea.scale=0.3;

ship=createSprite(200,200);
ship.addAnimation("movingShip",shipImg1);
ship.scale=0.25;

}

function draw() {

  background(0);
  sea.velocityX = -3;
   //code to reset the background 
   if(sea.x < 0){
      sea.x = sea.width/8;
     }
 
  drawSprite();
}