var database;
var form;
var s1,seed1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var Seed;
//var fs, fs1, fs2, fs3, fs4;
var s1;
var bg;

var shovel, shovelimg;

var raindrops =[];

function preLoad(){
  bg = loadImage("bg1.jpg");
  shovelimg = loadImage("shovel.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  database = firebase.database();
  //form = new Form();
  //fs = new flowerSeeds(100,200);

  //Seed = new seed();

  s1 = new screen1();

 
  
  
}

function draw() {
  Engine.update(engine);
  
  
  background("Brown");  
  //console.log(bg);
  //form.display();

  //Seed.display();
  
    //fs.display();
    s1.display();

    //fill("Green");
    //rect(displayWidth/2,displayHeight/2 - 300,displayWidth/4,300);
  drawSprites();
}
/*function mouseDragged(){
Matter.Body.setPosition(fs.body,{x: displayWidth/2,
                                 y: displayHeight/2 - 300})         
}*/

