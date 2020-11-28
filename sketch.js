
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)
  
	dustbin1 = new Dustbin(600,570);
  paper1 = new Paper(200,100);

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  dustbin1.display();
  paper1.display();

  drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

   }
}

