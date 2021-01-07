var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];

gameState = "start";


var divisionHeight=300;

var particle;
var turn = 0;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    p1 = new Particle(mouseX, 200, 10);

    mousePressed();
}
 


function draw() {
  background("black");
  textSize(20)
  text(mouseX+", "+mouseY, mouseX, mouseY);
 text("Score : "+score,20,30);
 text("300",420, 550 );
 text("300",350, 550 );
 text("300",250, 550 );
 text("300",510, 550 );

 text("100",580, 550 );
 text("300",175, 550 );
 text("300",100, 550 );
 text("100",670, 550 );
 text("300",25, 550 );
 text("100",740, 550 );
 
  Engine.update(engine);
 
  p1.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
 // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  if(particle!==null){
    
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<560){
        score = score+100;
        particle = null;
        if(turn>=5){
          gameState = "end";
        }
        
      
    
  }
}
  }




  if(particle!==null){
    
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<560){
        score = score+300;
        particle = null;
        if(turn>=5){
          gameState = "end";
        }
        
      
    
  }
}
  }

  






  if(gameState== "end"){
    textSize(100);
    text("GAMEOVER", 200, 400);
  }


   ground.display();

   stroke("yellow")
 line(0, 400, 800, 400);
 noStroke();
}




function mousePressed(){
  if(gameState!=="end"){
    
    turn++;
     particle = new Particle(mouseX, 10, 10);
  
  }
}