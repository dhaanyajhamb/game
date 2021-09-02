var milk, milkImage
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coinImage
var dogsGroup, dogImage
var cat, catImage
var gameState
var maze, mazeImage


function preload(){
 
  mazeImage = 
  loadImage("images/maze.png");
  
  coinImage = 
  loadImage("images/coin.png");

function setup(){
  createCanvas (400,400);

  

  maze = createSprite(200,200,50,70);
  maze.addImage("maze",mazeImage);

  coin1 = createSprite(100,100,30,40)
  coin1.addImage("coin",coinImage);

  coin2 = createSprite(100,100,30,40)
  coin2.addImage("coin",coinImage);

  coin3 = createSprite(100,100,30,40)
  coin3.addImage("coin",coinImage);

  coin4 = createSprite(100,100,30,40)
  coin4.addImage("coin",coinImage);

  coin5 = createSprite(100,100,30,40)
  coin5.addImage("coin",coinImage);

  coin6 = createSprite(100,100,30,40)
  coin6.addImage("coin",coinImage);

  coin7 = createSprite(100,100,30,40)
  coin7.addImage("coin",coinImage);

  coin8 = createSprite(100,100,30,40)
  coin8.addImage("coin",coinImage);

  coin9 = createSprite(100,100,30,40)
  coin9.addImage("coin",coinImage);

  coin10 = createSprite(100,100,30,40)
  coin10.addImage("coin",coinImage);
}

function draw(){
  drawSprites();
}
}