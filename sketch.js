var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);
  movingRect = createSprite(100, 200, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(200, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  //(sum of half of their widths)- horizontal
  //(50 + 80)/2 = 130/2 = 65
  //(movingRect.x - fixedRect.x)
}

function draw() {
  background(0); 

  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < (movingRect.width+fixedRect.width)/2 &&
  fixedRect.x - movingRect.x <(movingRect.width+fixedRect.width)/2  &&
  movingRect.y - fixedRect.y<(movingRect.height+fixedRect.height)/2 &&
  fixedRect.y - movingRect.y< (movingRect.height+fixedRect.height)/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";  
  }
  drawSprites();
}