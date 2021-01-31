const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1,ground2,ground3,Polygon,Sling,block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(550,300,300,10);
    ground3 = new Ground(950,250,250,10);
    Polygon=new polygon(100,210,50,50);
    Sling=new slingShot(Polygon.body,{x:100,y:200})
    block1=new Block1(430,270,40,40);
    block2=new Block1(470,270,40,40);
    block3=new Block1(510,270,40,40);
    block4=new Block1(550,270,40,40);
    block5=new Block1(590,270,40,40);
    block6=new Block1(630,270,40,40);
    block7=new Block1(670,270,40,40);
    block8=new Block3(470,230,40,40);
    block9=new Block3(510,230,40,40);
    block10=new Block3(550,230,40,40);
    block11=new Block3(590,230,40,40);
    block12=new Block3(630,230,40,40);
    block13=new Block2(510,190,40,40);
    block14=new Block2(550,190,40,40);
    block15=new Block2(590,190,40,40);
    block16=new Block4(550,150,40,40);
    block17=new Block1(950,230,40,40);
    block18=new Block1(910,230,40,40);
    block19=new Block1(870,230,40,40);
    block20=new Block1(990,230,40,40);
    block21=new Block1(1030,230,40,40);
    block22=new Block3(910,190,40,40);
    block23=new Block3(950,190,40,40);
    block24=new Block3(990,190,40,40);
    block25=new Block2(950,150,40,40);
}
function draw(){
    background("brown");
    Engine.update(engine);
    fill("white");
    textSize(20);
    text("Drag the Hexagon Stone and Release it, to launch it towards the blocks",10,20);
    ground1.display();
    ground2.display();
    ground3.display();
    Polygon.display();
    Sling.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
}
function mouseDragged()
{
  Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    Sling.fly();
}
