const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var box3;
var box4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240, 100, 50, 50);
    box3 = new Box(260, 50, 50, 50);
    box4 = new Box(280, 5, 50 , 50);
    ground1 = new ground (200, 380, 400, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();
   
}