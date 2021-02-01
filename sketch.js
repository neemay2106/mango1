
var boyImg,mango1,boy,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var launcherObject,groundObject,stoneObject;

function preload()

{
  boyImg = loadImage('sprites/boy.png');
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;
  stoneobject= new stone(235,420,30);
	//Create the Bodies Here.
	mango2 = new mango(1170,100,30);
	mango1 = new mango(1100,130,30);
  mango3 =  new mango(1010,140,30);
  mango4 = new mango(1000,70,30);
	mang5 = new mango(1100,70,30);
  mango6 =  new mango(900,230,30);
  mango7 = new mango(1000,230,30);
	mango8 = new mango(1140,150,40);
  mango9 =  new mango(1100,230,40);
  mango10 = new mango(1170,100,30);
	mango11 = new mango(1100,130,30);
	mango12 =  new mango(1010,140,30);
 treeobject = new tree(1050,580);
 groundObject=new ground(width/2,600,width,20); 
 launcherObject=new launcher(stoneObj.body,{x:235,y:420}) 
 var render = Render.create({ 
   element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } 
  });

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImg,200,340,200,300);
  mango3.display();
  mango2.display();
  mango1.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  treeobject.display();
 stoneobject.display();
 launcherObject.display();
 groundObject.display();
 detectollision(stoneobject,mango1);
 detectollision(stoneobject,mango2);
 detectollision(stoneobject,mango3);
 detectollision(stoneobject,mango4);
 detectollision(stoneobject,mango5);
 detectollision(stoneobject,mango6);
 detectollision(stoneobject,mango7);
 detectollision(stoneobject,mango8);
 detectollision(stoneobject,mango9);
 detectollision(stoneobject,mango10);
 detectollision(stoneobject,mango11);
 detectollision(stoneobject,mango12);

  
  drawSprites();
  
  image(boyImg,200,340,200,300);
 
}
function mouseDragged() { Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) } 
function mouseReleased() { launcherObject.fly(); 
   distance=int(dist(stoneObject.x,stoneObject.y,mango1.x,mango1.y)); } 
   function keyPressed() 
   { 
     if (keyCode === 32) 
     { Matter.Body.setPosition(stoneObject.body, {x:235, y:420}) 
     launcherObject.attach(stoneObj.body);
     } } 
   function detectollision(lstone,lmango)
   { 
      mangoBodyPosition=lmango.body.position 
      stoneBodyPosition=lstone.body.position
       var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
       if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
       }
       }




