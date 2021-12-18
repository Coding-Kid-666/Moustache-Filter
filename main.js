nose_X = 0;
nose_Y = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

 function modelLoaded(){
        console.log("poseNet succesfully loaded.");
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            nose_X =  results[0].pose.nose.x - 50;
            nose_Y = results[0].pose.nose.y;
        }
    }
function draw(){
    image(video,0,0,500,400);
    image(mustache,nose_X,nose_Y,100,70)
}

function snapshot(){
    save("ImMustacheMan.png");
}