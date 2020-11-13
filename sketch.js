var car,wall,speed,deformation,weight

function setup() {
  createCanvas(1200,400);
  car=createSprite(0, 200, 50, 50);
  car.shapeColor="blue";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed
  wall=createSprite(1100, 200, 20, 400);
  wall.shapeColor="brown";

}

function draw() {
  background(0);
  
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      car.shapeColor="red"
    }

    if(deformation<180 && deformation>100){
    car.shapeColor="yellow"
  }

  if(deformation<100){
    car.shapeColor="green"
  }
}
  drawSprites();
}