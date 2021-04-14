var box1,box2,box3,box4
var boxGroup;
var paddle;
var ball;
var edges;



function setup() {
  createCanvas(400,600);

  paddle = createSprite(200,500,80,15);
    paddle.shapeColor = "white";

    ball = createSprite(200,480,20,20);
    ball.shapeColor = "grey";

    edges = createEdgeSprites();

    boxGroup = new Group();

    createBox();

}

function draw() {
  background("black"); 
  stroke("white");
  textSize(30); 
  text(); 
  drawSprites();
ball.bounceOff(edges[0]);
ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
ball.bounceOff(paddle);
ball.bounceOff(boxGroup);


paddle.collide(edges[0]);
paddle.collide(edges[1]);

   
  if(keyDown("space")){
    ball.velocityX = Math.round(random(2,5));
    ball.velocityY = -1*Math.round(random(2,5));


  }

  if(keyDown("left")){
    paddle.velocityX = -4;
  }

  if(keyDown("right")){
    paddle.velocityX = 4;
  }


}
function createBox(){
  for(var i = 20; i< 400;i+= 45 ){
    box1 = createSprite(i,20,40,15);
   // console.log(i);
    box1.shapeColor = "red";
    //box1.debug = true;//("rectangle",0,0,40,15);
boxGroup.add(box1);

    box3 = createSprite(i,50,40,15);
    box3.shapeColor = "yellow";
   // box3.debug = true;//("rectangle",0,0,40,15);
   boxGroup.add(box3);


    box2 = createSprite(i,80,40,15);
    box2.shapeColor = "lightblue";
    //box2.debug = true;//("rectangle",0,0,40,15);
    boxGroup.add(box2);


    box4 = createSprite(i,110,40,15);
    box4.shapeColor = "lightgreen";
   // box4.debug = true;//("rectangle",0,0,40,15);
   boxGroup.add(box4);


    


  }

}