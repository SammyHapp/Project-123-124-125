noseX= 0;
noseY= 0;
leftwristX= 0;
rightwristX= 0;
difference= 0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550, 400);

    canvas= createCanvas(550, 350);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initalized");
}

function draw(){
    background("#3DB7EE");
    document.getElementById("font_size").innerHTML= "The font size of the text will be- " + difference + "px";
    textSize(difference);
    fill('#F41574');
    text('Samrath', 50, 400);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference= floor(leftwristX - rightwristX);
        console.log("NoseX= " + noseX + "NoseY= " + noseY);
        console.log("LeftWristX= " + leftwristX + "RightWristX= " + rightwristX + "Difference= " + difference);
    }
}