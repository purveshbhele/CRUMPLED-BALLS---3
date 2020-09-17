
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
    

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	
	
	boxm= new Box(660,340,150,100,{isStatic:true} );
	
	
	
	ball = new Ball(200,100,20,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
   
  ground.display();
  ball.display();
  
  boxm.display();
  
  

 drawSprites();
 
}
function keyPressed() {
if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y: -40});
}


}




