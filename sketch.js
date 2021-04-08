
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1130,160,30);
	mango3=new mango(1040,90,30);
	mango4=new mango(1180,130,30);
	mango5=new mango(970,140,30);
	mango6=new mango(940,200,30);
	mango7=new mango(1070,160,30);
	stone1=new stone(200,100,60);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshot = new SlingShot(stone1.body,{x:230, y:390});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();

  groundObject.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
    slingshot.attach(stone1.body);
 }
}

function detectCollision(lstone,lmango){
   mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;

   var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   if(distance<=lmango.r+lstone.r){
	   matter.Body.setStatic(lmango.body,false);
   }
}
