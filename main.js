var noseX=0;
var noseY=0;
var rightwristX=0;
var leftwristX=0;
var difference=0;

function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(800,150);

   video= createCapture(VIDEO);
   video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
    console.log("poseNet is initalized");

}
function draw()
{
    background("pink");
    document.getElementById("square_side").innerHTML= 'length of square is '+ difference +'pixels';
    fill("purple");
    stroke("violet");
    square(noseX,noseY,difference);
}
function gotPoses(results)
{
   if(results.length>0){ 
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX+"noseY = "+noseY);
    leftwristX= results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;
    difference= floor(leftwristX-rightwristX);
    console.log("leftwristX = "+ leftwristX + "rightwristX = " +rightwristX);
   }
}

