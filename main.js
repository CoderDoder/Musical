var song1="";
var song2="";
var leftX=0;
var leftY=0;
var rightX=0;
var rightY=0;

function draw(){
    image(video,0,0,550,400);
    

}

function setup(){
    canvas=createCanvas(550,400);
    canvas.position(500,350);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function preload(){
    song1=loadSound("Dancin.mp3");
    song2=loadSound("WorthNothing.mp3");

}

function modelLoaded(){
    console.log("posenet model initialized");
} 

function gotPoses(results){
    if(results.length>0){
      console.log(results);
      leftX=results[0].pose.leftWrist.x;
      leftY=results[0].pose.leftWrist.y;
      rightX=results[0].pose.rightWrist.x;
      rightY=results[0].pose.rightWrist.y;
      console.log("lX="+leftX+" lY="+leftY+" rX="+rightX+" rY="+rightY);
    }
}

function play(){
    song1.play()
}