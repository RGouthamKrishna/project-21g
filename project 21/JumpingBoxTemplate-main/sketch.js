var canvas;
var music;
var ball;
var ground1;
var ground2;
var ground3;
var ground4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
ball = createSprite(10,50,20,20);
    //create 4 different surfaces
    ground1 = createSprite(90,580,180,20);
    ground2 = createSprite(300,580,180,20);
    ground3 = createSprite(510,580,180,20);
    ground4 = createSprite(720,580,180,20);



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();

    ground1.shapeColor = "green";
    ground2.shapeColor = "yellow";
    ground3.shapeColor = "red";
    ground4.shapeColor = "blue";
    ball.shapeColor = "white";

    ball.bounceOff(ground1);
    ball.bounceOff(ground2);
    ball.bounceOff(ground3);
    ball.bounceOff(ground4);
    ball.bounceOff(edges);

    
    
    
    


    
        


 
    ball.velocityX = 4;
    ball.velocityY = 4;
    drawSprites();

    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(ground3)&& box.bounceOff(ground3)){
        blue();
    }
}
function blue(){
    ball.shapeColor = "blue";
}
