const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  var particles=[];
  var plinkos=[];
  var divisions=[];
 for (var k=0; k<=width; k=k+80){
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
 }
 for (var j=40;j<= width; j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for (var j=15;j<= width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

}

function draw() {
  background(255,255,255);  

}