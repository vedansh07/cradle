
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Paper(300,200,40);
	bobObject2 = new Ppaer(400,200,40);
	bobObject3 = new Paper(500,200,40);
	bobObject4 = new Paper(600,200,40);
	bobObject5 = new Paper(700,200,40);

	roofObject= new Ground(width/4,670,width,20);

	rope1= new Chain(bob1.body,ground1.body,-50*2,0);
	rope2= new Chain(bob2.body,ground1.body,-25*2,0);
	rope3= new Chain(bob3.body,ground1.body,-0*2,0);
	rope4= new Chain(bob4.body,ground1.body,25*2,0);
	rope5= new Chain(bob5.body,ground1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();	
  bobObject4.display();
  bobObject5.display();
  
  roofObject.display();

  rope1.display();
  rope2.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-500}); } 
} 



