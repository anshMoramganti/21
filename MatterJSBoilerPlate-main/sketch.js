
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftGround,rightGround;
var radius = 40

function preload()
{
	
}

function setup() {
	createCanvas(1600 , 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);
	ground = new Wall(width/2,650,width,20)
	rightGround = new Wall(1100,600,20,120);
	leftGround = new Wall(1350,600,20,120);



	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  rightGround.display();	
  leftGround.display();
  ellipse(ball.position.x,ball.position.y,radius,radius);

  
  
  drawSprites();
  function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
	}
 
}




}
