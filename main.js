status1 = "" ;
objects = [] ; 
percent = "" ; 
function preload() {

    video = createVideo('video.mp4') ; 
    video.hide()
}

function setup() {

   canvas =  createCanvas(380 , 380 )
canvas.center() ; 



}

function st() {

coco = ml5.objectDetector('cocossd' , modelLoaded) ; 

function modelLoaded() {

console.log("model has loaded commander")
status1 = true ; 
video.loop()  ; 
video.volume(1) ; 
video.speed(1) ; 



}


}
function draw() {

    image(video , 0 , 0 , 380 , 380)
    if(status1 != "") {

 coco.detect(video , gotResult) 
 for(var i=0 ; i < objects.length ; i++ ){

document.getElementById("stat").innerHTML = "Objects are being detected" ; 
document.getElementById("nod").innerHTML = "Number of objects detected are" + objects.length ; 

percent = floor(objects[i].confidence*100) ; 
fill("red")
stroke("red") 
text(objects[i].label + " " + percent + " %" , objects[i].x + 15 , objects[i].y +15 )
noFill()
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height) ; 

 }
    }


}

function gotResult(error , results) {

if(error){
    console.log(error)


}

else {

console.log(results) ; 
objects = results ; 
}
}

