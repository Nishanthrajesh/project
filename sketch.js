var bg,bgImg,vulture,vulture_Ani

function preload()
{
  bgImg = loadImage("forest.jpg")
  vulture_Ani = loadAnimation("vulture1.png","vulture.png")
}

function setup()
{
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(windowWidth/2,windowHeight/4)
  bg.addImage(bgImg)
  vulture = createSprite(300,height/2)
  vulture.addAnimation("vulture_attacking",vulture_Ani);
}

function draw()
{
 background("black")
 bg.velocityX = -3;

 if (bg.x < width/3)
 {
    bg.x = bg.width/2;
    
 }

 drawSprites();
}