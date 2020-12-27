const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var ground;
var dustbin;

function preload()
{
	
}


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,20)

   ground =  Bodies.rectangle(600,690,1200,10,{isStatic:true});
   World.add(world,ground);

 dustbin = new trashcan(1000,620,20,100);

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("orange");
  
 

  rect(ground.position.x,ground.position.y,1200,10);
  drawSprites();
  paper.display();

dustbin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-30});
  
	}
}