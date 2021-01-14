const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var divisions=[];
var plinkos=[];
var particles=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(100,790,800,20);
  ground2=new Ground(10,400,20,800);
  ground3=new Ground(470,400,20,800);

//   division1=new Division(30,1580,1560,20);
// division2=new Division(400,1590,20,100);
// division3=new Division(200,1590,20,500);
// division4=new Division(600,1590,20,500);
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  // division1.display();
  // division2.display();
  // division3.display();
  // division4.display();

  ground1.display();
  ground2.display();
  ground3.display();

  if (frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
 
  for(var k=0;k<=width;k+50){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight)); 
  }

for(var j=40;j<=width;j=j+50)
{   
  plinkos.push(new Plinko(j,75));
}
for(var j=40;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}

for(var j=0;j<particles.length;j++){
    particles=[j].display();
}
for(var k=0;k<divisions.length;k++){
     divisions=[k].display();
} 


}