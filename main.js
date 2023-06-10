var song1="";
var song2="";

function draw(){
    image(video,0,0,550,400);
}

function setup(){
    canvas=createCanvas(550,400);
    canvas.position(500,350);
    video=createCapture(VIDEO);
    video.hide();
}

function preload(){
    song1=loadSound("Dancin.mp3");
    song2=loadSound("WorthNothing.mp3");

}

function play(){
    song1.play()
}