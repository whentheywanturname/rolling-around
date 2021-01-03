
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boi1, boi2;
var world;
function preload()
{
	boi1=loadImage("pictures/Trash.png")
	boi2=loadImage("pictures/Paperisded.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
 	boxPosition=1200;
	 boxY=625;
	thebotsaretrash=createSprite(300,640,50,50,60);
    thebotsaretrash.addImage(boi2);
	thebotsaretrash.scale=0.04

	 groundSprite=createSprite(width/2, height-15, width,40);
	 groundSprite.shapeColor=color("grey")

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("green");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);
	 boxleftSprite.visible=false;

 	boxBase=createSprite(boxPosition-100, boxY-80, 200,20);
 	boxBase.shapeColor=color("green");
	boxBase.addImage(boi1);
	boxBase.scale = 0.5;

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("green");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  thebotsaretrash.x=thebotsaretrash.position.x 
  thebotsaretrash.y=thebotsaretrash.position.y 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode ===UP_ARROW) {

		thebotsaretrash.x=thebotsaretrash.x+20;  
		thebotsaretrash.y=thebotsaretrash.y-60;  
		translation={x:20,y:-60}
		Matter.Body.translate(thebotsaretrash, translation)
	}
	  else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(thebotsaretrash,false);
		
	  }
}


 