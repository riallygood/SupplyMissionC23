var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1, side2, boxBottom;
var packageBody,ground,side1S, side2S, boxBottomS;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255);
	side1S=createSprite(width/2+110 , 595 , 20 , 100);
	side1S.shapeColor="red";
	side2S=createSprite(width/2-110 , 595 , 20 , 100);
	side2S.shapeColor="red";
	boxBottomS=createSprite(width/2 , 635 , 200 , 20);
	boxBottomS.shapeColor="red";
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, isStatic:true}); 

	side1 = Bodies.rectangle(width/2+110 , 595 , 20 , 100, {isStatic:true}); 
	side2 = Bodies.rectangle(width/2-110, 595 , 20, 100, {isStatic:true}); 
	boxBottom = Bodies.rectangle(width/2 , 635 , 200 , 20, {isStatic:true}); 
	World.add(world, side1);
	World.add(world, side2);
	World.add(world, boxBottom);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, isStatic:false}); 
	World.add(world, packageBody);
   
  }
}



