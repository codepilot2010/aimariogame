function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet= ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modelLoaded()
{
	console.log("model is loaded");
}

function gotPoses(results)
{
	if(results.length>0)
	{
		nosex=results[0].pose.nose.x;
		nosey=results[0].pose.nose.y;
		console.log(results);
	}
}





