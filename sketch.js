var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup()
{
  createCanvas(1200,800);

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw()
{
  background(0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, gameObject1))
  {
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else if(isTouching(movingRect, gameObject2))
  {
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else if(isTouching(movingRect, gameObject3))
  {
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else if(isTouching(movingRect, gameObject4))
  {
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1, object2)
{
  var xCenterDistance = object2.width/2 + object1.width/2;
  var yCenterDistance = object2.height/2 + object1.height/2;

  var rightDistance = object1.x - object2.x;
  var leftDistance = object2.x - object1.x;

  var topDistance = object1.y - object2.y;
  var bottomDistance = object2.y - object1.y;

  if (rightDistance < xCenterDistance && leftDistance < xCenterDistance
    && topDistance < yCenterDistance && bottomDistance < yCenterDistance)
  {
    return true;
  }
  else
  {
    return false;
  }
}
