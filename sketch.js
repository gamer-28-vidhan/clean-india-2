
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gbg
var floor
var bin
var www1, www2, www3;
var bg1;

function preload()
{
paper = loadImage("images/paper.png")	
bin_1 = loadImage("images/dustbingreen.png")
bg1 = loadImage("images/bggg.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var f = {

		isStatic:true
	}

	
	
	floor = createSprite(400,520,800,15)
	floor.shapeColor = "yellow"

	floor = Bodies.rectangle(400,520,800,15,f)
	World.add(world,floor)
	
	bin = createSprite(580,445,100,10)
	bin.addImage(bin_1)
	bin.scale=0.4
	
	www1 = new bound(580,505,100,10)
www2 = new bound(525,450,10,140)
www3 = new bound(635,450,10,140)


		
	gbg = new Gbg (160,495,15,PI/2)





	





	
  
}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  
  background("lightgreen");

  rect(400,520,800,15)
  
  
  
 
  gbg.display();
www1.display();
www2.display();
www3.display();
 

  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	
	Matter.Body.applyForce(gbg.body, gbg.body.position,{x:20, y:-50});
}

}