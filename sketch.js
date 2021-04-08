var  treeImg, boyImg, groundSprite
var  tree, boy, stone
var  mango1, mango2, mango3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImg = loadImage("Plucking mangoes/tree.png")
    boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);

	tree = createSprite(600, 600, 10,10);
	tree.addImage("tree",treeImg);
	tree.scale=0.2

	boy = createSprite(200, 600, 10,10);
	boy.addImage("boy",boyImg)
	boy.scale=0.5

	groundSprite=createSprite(width/2, height-90, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(200,300,30,40) 
	mango1 = new Mango(500,500,30,30)
	mango2 = new Mango(600,500,30,30)
	mango3 = new Mango(650,500,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();

  drawSprites();
 
}



