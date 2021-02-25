const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 780, 480, 20)
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,75))
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,125))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,175))
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,225))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,275))
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,325))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,375))
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,425))
  }
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display()
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display()
  }
  if(frameCount % 60===0){
    particles.push(new Particles(random(width/5-10, width/1+10), 10, 10))
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display()
  }
  ground.display()
  console.log(frameCount)
}