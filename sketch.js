var hours;
var hoursAngle;
var minutes;
var minutesAngle;
var seconds;
var secondsAngle;



function setup() {
  createCanvas(800,400);
  hours=hour();
  minutes = minute();
  seconds = second();
  
  hoursAngle = map(hours, 0, 23, 0, 369);
  minutesAngle=map(minutes, 0, 59, 0, 360);
  secondsAngle = map(seconds, 0, 59, 0, 360);
}

function draw() {
  background(0,0,0);  

  angleMode(DEGREES);
  translate(400,200);
  rotate(-90);
  hours=hour();
  minutes = minute();
  seconds = second();

  hoursAngle = map(hours%12, 0, 11, 0, 360);
  minutesAngle=map(minutes, 0, 59, 0, 360);
  secondsAngle = map(seconds, 0, 59, 0, 360);

 /* console.log(minutes);
  console.log(minutesAngle);
  console.log(seconds);
  console.log(secondsAngle);*/


  noFill();
  strokeWeight(5);

  push();
  rotate(hoursAngle)
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();
  stroke("blue");
  arc( 0,0, 100, 100, 0, hoursAngle);

  push();
  //translate(400,200);
  rotate(minutesAngle);
  stroke(255, 0,0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  stroke("red");
  arc( 0,0, 150, 150, 0, minutesAngle);

  push();
  //translate(400,200);
  rotate(secondsAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0, 100, 0);
  pop();
  stroke("lime");
  arc( 0,0, 200, 200, 0, secondsAngle);

 
  
 

 

  

}