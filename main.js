nosex=0;
nosey=0;

function preload() {
nose=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
 video=createCapture(VIDEO);
 video.size(300, 300);
 video.hide();

 posenet=ml5.poseNet(video, modelloaded);
 posenet.on('pose', gotpose);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, nosex, nosey, 30, 30);
}

function snap() {
    save('filterpic.png');
    
}

function modelloaded() {
    console.log("model is here bro")
}

function gotpose(results) {
    if(results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y+15;
        console.log("nosex= "+nosex+"nosey= "+nosey)
    }

}

