var fixrec, movrec;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixrec = createSprite(600, 400, 50, 80);
  fixrec.shapeColor = "green";
  fixrec.debug = true;
  movrec = createSprite(400,200,80,30);
  movrec.shapeColor = "green";
  movrec.debug = true;
  car=createSprite(200,200,50,50);
  wall=createSprite(1000,200,50,100);
  car.velocityX=8;
}

function draw() {
  background(255,255,255);  

  movrec.x=World.mouseX;
  movrec.y=World.mouseY;

  if(isTouching(movrec,fixrec)){
    fixrec.shapeColor="blue";
    movrec.shapeColor="blue";
  }else {
    fixrec.shapeColor="red";
    movrec.shapeColor="red";
  }
  
  if(isTouching(car,wall)){
    text("Touch",600,400);
  }

  //bounceoff(car,wall);

  collide(car,wall);

  drawSprites();
}

 