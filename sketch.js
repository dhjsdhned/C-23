


//Create namespace for Engine
const Engine= Matter.Engine;
//Create namespace for World
const World= Matter.World;
//Create namespace for Bodies
const Bodies= Matter.Bodies;
//Create namespace for Body
const Body= Matter.Body;


function setup() {
  createCanvas(400,400);
//create the engine
engine= Engine.create();
  //Add world to the engine
  world= engine.world;
  

  // giving particular amount for the ball to bounce(restitution) and as well as for the air friction
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  // to make sure that the ground is in one place and not moving (isStatic= true)
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground=Bodies.rectangle(100,390,400,20, ground_options);
//add to world
World.add(world, ground);
// create a ball
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  

}


function draw() 
{
  // create background
  background(51);
  Engine.update(engine);
  
  //write a circle function to display ball
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.
  rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 20);
  
  
}

