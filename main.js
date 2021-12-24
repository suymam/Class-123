leftWristX = 0;
rightWristX = 0;
difference = 0;
input_text = "";



function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

input_text = document.getElementById("text").value;

function draw(){
    background("grey");
    document.getElementById("Font_size").innerHTML = "The font size is = " + difference;
    textSize(difference);
    fill("black");
    stroke("black");
    
    text("Suyash",40 ,300);
    
}


 function modelLoaded(){
     console.log("Posenet has been initialised");
 }

 function gotPoses(results){
     if(results.length > 0 ){
         console.log(results);
         leftWristX = results[0].pose.leftWrist.x;
         rightWristX = results[0].pose.rightWrist.x;
         difference = floor(leftWristX - rightWristX);
     }
 }