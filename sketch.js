var Tom,Jerry,garden;

var TomImg1,TomImg2,TomImg3,JerryImg1,JerryImg2,JerryImg3,gardenImg;

function preload() 
{
    //load the images here
    TomImg1=loadAnimation("images/cat1.png");
    TomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    TomImg3=loadAnimation("images/cat4.png");

    gardenImg=loadImage("images/garden.png");

    JerryImg1=loadAnimation("images/mouse4.png");
    JerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    JerryImg3=loadAnimation("images/mouse1.png");
    
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,300);
    garden.addImage("garden",gardenImg);

    Tom=createSprite(800,500);
    Tom.addAnimation("Tom",TomImg1);
    Tom.scale=0.21;

    Jerry=createSprite(150,500);
    Jerry.addAnimation("Jerry",JerryImg1);
    Jerry.scale=0.16;
}

function draw() 
{

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(Tom.x - Jerry.x < (Tom.width - Jerry.width)/2)
    {
      Tom.addAnimation("cat",TomImg3);
      Tom.changeAnimation("cat",TomImg3);

      Jerry.addAnimation("rat",JerryImg3);
      Jerry.changeAnimation("rat",JerryImg3);

      Tom.velocityX=0;
    }
    
    keyPressed();
    drawSprites();
}


function keyPressed()
{
  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW))
  {
    Tom.addAnimation("tom",TomImg2);
    Tom.changeAnimation("tom",TomImg2);
    Tom.scale=0.3;
    Tom.velocityX=-4;

    Jerry.addAnimation("mouse",JerryImg2);
    Jerry.changeAnimation("mouse",JerryImg2);

  }


}
