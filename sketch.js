const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygonfly;
var gameState = "onSling";
var score = 0;
function preload(){
  polygon_img = loadImage("polygon.png");
}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,350,350,20)

   box1 = new Box(600,330,30,40)
   box2 = new Box(580,330,30,40)
   box3 = new Box(560,330,30,40)
   box4 = new Box(620,330,30,40)
   box5 = new Box(540,330,30,40)
   box6 = new Box(520,330,30,40)
   box7 = new Box(500,330,30,40)
   box8 = new Box(600,300,30,40)
   box9 = new Box(580,300,30,40)
   box10 = new Box(560,300,30,40)
   box11 = new Box(540,300,30,40)
   box12 = new Box(580,300,30,40)
   box13 = new Box(580,250,30,40)
   box14 = new Box(560,250,30,40)
   box15 = new Box(600,250,30,40)
   box16 = new Box(580,200,30,40)

   

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingshot = new SlingShot(this.polygon,{x:100, y:200});



    
   
   
   
}

function draw(){
    background(0);
    Engine.update(engine);
   
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    text("SCORE : "+score,750,40);
    box1.score();
    box2.score();
    box3.score();
    box4.score(); 
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score(); 
    box10.score(); 
    box11.score(); 
    box12.score();
    box13.score(); 
    box14.score(); 
    box15.score();
    box16.score(); 
    ground.display();
  
    fill("pink")
    box1.display();
    box2.display();
    
    box3.display();
    box4.display();
   
    box5.display();  
    box6.display();    
    box7.display();    
    fill("red")
    box8.display();  
              
    box9.display()
    
    box10.display()
    
    box11.display()
  
    box12.display()
    fill("yellow")
    box13.display()
    box14.display()
    box15.display()
    fill("blue")
box16.display()
    
                
   slingshot.display();
  
}
function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
    return false;
   

}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon);

    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}