var player

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	player=createSprite(500,500,10,10)


	

	//Create the Bodies Here.
	

	
  
}


function draw() {
 
  background(0);
	if(keyDown(UP_ARROW)){
		player.y=player.y-3;
	}
	if(keyDown(RIGHT_ARROW)){
		player.x=player.x+3;
	}
	if(keyDown(LEFT_ARROW)){
		player.x=player.x-3;
	}
	nonplayer();
  drawSprites();
 
}

function nonplayer() {
	if(frameCount % 1 === 0){
		var nonPlayer = createSprite (Math.round(random(100,700)),Math.round(random(0,10)),10,10);
		nonPlayer.velocityY=5;

	}





}

