scorerightwrist=0;
song="";
leftwristx=0;
rightwristy=0;
leftwristy=0;
scoreleftwrist=0;
rightwristx=0;
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function preload(){
song=loadSound("music.mp3");
}

function draw(){
image(video,0,0,600,500);

fill("red");
stroke("red");
if(scorerightwrist>0.2){


circle(rightwristx,rightwristy,20);
if(rightwristy>0 && rightrwisty<=100){
    document.getElementById("Speed").innerHTML="speed=0.5x";
    song.rate(0.5);  
}
else if(rightwristy>100 && rightrwisty<=200){
    document.getElementById("Speed").innerHTML="speed=1x";
    song.rate(1);
}
else if(rightwristy>200 && rightrwisty<=300){
    document.getElementById("Speed").innerHTML="speed=1.5x";
    song.rate(1.5);}

    else if(rightwristy>300 && rightrwisty<=400){
        document.getElementById("Speed").innerHTML="speed=2x";
        song.rate(2);
    }
    else if(rightwristy>400 && rightrwisty<=500){
        document.getElementById("Speed").innerHTML="speed=2.5x";
        song.rate(2.5);
    }}
if(scoreleftwrist>0.2){
circle(leftwristx,leftwristy,20);
numberleftwristy=Number(leftwristy);
removedecimal=floor(numberleftwristy);
volume=removedecimal/500;
document.getElementById("Volume").innerHTML="volume="+volume;
song.setVolume(volume);
}
}
 
function play(){
song.play();
song.setVolume(1);
song.rate(1);    
}

function modelLoaded(){
console.log("model is Loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y; 
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log(scoreleftwrist); 
scorerightwrist=results[0].pose.keypoints[10].score;
console.log(scorerightwrist);    
}        
}