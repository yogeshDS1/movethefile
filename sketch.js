var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = "green";
}

function draw()
{
 background(220);
 drawSprites();
 fill('black');
 text("Click anywhere to move the box",100,200);
 if(mouseIsPressed){
     box.velocityX =4

 }
}


