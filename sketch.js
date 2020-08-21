var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  var xCenterDistance = fixedRect.width/2 + movingRect.width/2;
  var yCenterDistance = fixedRect.height/2 + movingRect.height/2;

  var rightDistance = movingRect.x - fixedRect.x;
  var leftDistance = fixedRect.x - movingRect.x;

  var topDistance = movingRect.y - fixedRect.y;
  var bottomDistance = fixedRect.y - movingRect.y;

  if (rightDistance < xCenterDistance && leftDistance < xCenterDistance
    && topDistance < yCenterDistance && bottomDistance < yCenterDistance)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}