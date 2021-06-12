
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG, miniG2
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16

var block17,block18,block19,block20,block21,block22,block23,block24,block25
var hexa_image, hexa

var chain

function preload() {
  
  hexa_image=loadImage("polygon.png")

}



function setup() {
	createCanvas(800, 470);


	engine = Engine.create();
	world = engine.world;
 

    ground= new Ground(400,400,1000,20)
    miniG= new Ground(640,168,220,20)
    miniG2= new Ground(390,305,250,20)

    block1 = new Block(300,275,30,40);
    console.log(block1);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);

    block17=new Block2(580,125,30,30)
    block18=new Block(610,125,30,30)
    block19=new Block2(640,125,30,30)
    block20=new Block(670,125,30,30)
    block21=new Block2(700,125,30,30)

   block22=new Block2(610,95,30,30)
  block23=new Block(640,95,30,30)
    block24=new Block2(670,95,30,30)

    block25=new Block2(640,65,30,30)

  

    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain=new Chain(hexa,{x:150,y:200})

    


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(46, 427, 12));

  ground.display()
  miniG.display()
  miniG2.display()

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()


  fill('pink');
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  
  fill("crimson");
  block13.display()
  block14.display()
  block15.display()

  block16.display()


  fill('red');
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  fill("turquoise");

  block22.display()
  block23.display()
  block24.display()

  block25.display()

  chain.display()

  

  fill("white")
    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(bird.body);
  }
}



