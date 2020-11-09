const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {

  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //creating ground
    ground = new Ground(600,height,1200,20);
}

//creating arrays
var particles=[];
var plinkos =[];
var divisions=[];

var divisionHeight=300;

function draw() {
  background(255,255,255);  
  Engine.update(engine);

//creating divisons
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  //creating plinkos
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinkos(j,75));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new plinkos(j,175));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinkos(j,75));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new plinkos(j,175));
  }

  //creating plinko

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  //displaying things
  ground.display();

  for(var a=0;a<particles.length;a++){
    particles[a].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var q=0;q<divisions.length;q++){
    plinkos[q].display();
  }
 
  drawSprites();
}