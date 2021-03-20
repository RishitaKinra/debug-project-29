const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon, polygon_img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon = new Polygon(250,windowHeight/2,75);
  slingShot = new SlingShot(polygon.body, {x:250, y:windowHeight/2});

  ground = new Ground(windowWidth/2,windowHeight-10,windowWidth,15);
  stand1 = new Stand(windowWidth/2,windowHeight/2,250,10);
 
  //level one
  block1 = new Block(windowWidth/2-95,windowHeight/2-25,30,40);
  console.log(block1);
  block2 = new Block(windowWidth/2-65,windowHeight/2-25,30,40);
  block3 = new Block(windowWidth/2-35,windowHeight/2-25,30,40);
  block4 = new Block(windowWidth/2-5,windowHeight/2-25,30,40);
  block5 = new Block(windowWidth/2+25,windowHeight/2-25,30,40);
  block6 = new Block(windowWidth/2+55,windowHeight/2-25,30,40);
  block7 = new Block(windowWidth/2+85,windowHeight/2-25,30,40);
  //level two
  block8 = new Block(windowWidth/2-65,windowHeight/2-65,30,40);
  block9 = new Block(windowWidth/2-35,windowHeight/2-65,30,40);
  block10 = new Block(windowWidth/2-5,windowHeight/2-65,30,40);
  block11 = new Block(windowWidth/2+25,windowHeight/2-65,30,40);
  block12 = new Block(windowWidth/2+55,windowHeight/2-65,30,40);
  //level three
  block13 = new Block(windowWidth/2-35,windowHeight/2-105,30,40);
  block14 = new Block(windowWidth/2-5,windowHeight/2-105,30,40);
  block15 = new Block(windowWidth/2+25,windowHeight/2-105,30,40);
  //top
  block16 = new Block(windowWidth/2-5,windowHeight/2-145,30,40);

  //pyramdid 2
  //base
  stand2 = new Stand(windowWidth/2+475,windowHeight/2-100,250,10);
  //layer 1
  block17 = new Block(windowWidth/2+400,windowHeight/2-125,50,50);
  block18 = new Block(windowWidth/2+450,windowHeight/2-125,50,50);
  block19 = new Block(windowWidth/2+500,windowHeight/2-125,50,50);
  block20 = new Block(windowWidth/2+550,windowHeight/2-125,50,50);
  //layer 2
  block21 = new Block(windowWidth/2+425,windowHeight/2-175,50,50);
  block22 = new Block(windowWidth/2+475,windowHeight/2-175,50,50);
  block23 = new Block(windowWidth/2+525,windowHeight/2-175,50,50);
  //layer 3
  block24 = new Block(windowWidth/2+450,windowHeight/2-225,50,50);
  block25 = new Block(windowWidth/2+500,windowHeight/2-225,50,50);
  //top layer
  block26 = new Block(windowWidth/2+475,windowHeight/2-275,50,50);

}
function draw() {
  background(56,44,44); 

  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(4);
  stroke("black");
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("red");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  fill("green");
  block21.display();
  block22.display();
  block23.display();
  fill("blue");
  block24.display();
  block25.display();
  fill("white");
  block26.display();

  polygon.display();

  slingShot.display();

}
