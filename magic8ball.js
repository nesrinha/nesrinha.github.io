var x = 300;
var y = 300;
var randomNumber;
MagicBall();

function mousePressed() {
  if (mouseX > 190 && mouseX < 400) {
    console.log("magic", 260, 120);
  }

  randomNumber = random(1, 10);
  clear();
  MagicBall();
  if (Math.round(randomNumber) === 1) {
    fill(255);
    textSize(30);
    text("Yes", 280, 130);
  }
  if (Math.round(randomNumber) === 2) {
    fill(255);
    textSize(30);
    text("Fail", 270, 130);
  }
  if (Math.round(randomNumber) === 3) {
    fill(255, 0, 255);
    textSize(30);
    text("No", 280, 130);
  }
  if (Math.round(randomNumber) === 4) {
    fill(255, 255, 0);
    textSize(30);
    text("Life is\nbeautiful", 260, 110);
  }
  if (Math.round(randomNumber) === 5) {
    fill(255, 179, 179);
    textSize(30);
    text("Very\ndoubtful", 260, 110);
  }
  if (Math.round(randomNumber) === 6) {
    fill("green");
    textSize(30);
    text("Go Home", 240, 130);
  }
  if (Math.round(randomNumber) === 7) {
    fill(179, 179, 0);
    textSize(30);
    text("Be Happy", 240, 130);
  }
  if (Math.round(randomNumber) === 8) {
    fill(255, 0, 255);
    textSize(30);
    text("Be Smart", 240, 130);
  }
  if (Math.round(randomNumber) === 9) {
    fill(128, 255, 128);
    textSize(30);
    text("Maybe", 260, 130);
  }

  if (Math.round(randomNumber) === 10) {
    fill(0, 128, 179);
    textSize(30);
    text("Keep\nCalm", 264, 109);
  }
}

function MagicBall() {
  //Background
  background(0, 26, 102);
  //MagicBall
  fill(255, 179, 179);
  circle(300, 300, 100);
  noStroke();
  fill(255);
  circle(300, 300, 70);
  fill(0);
  textSize(100);
  text("8", 270, 340);
  //Dreieck
  fill(0);
  triangle(300, 50, 180, 150, 420, 150);
  //Pfeile
  fill(255);
  push();
  translate(180, 530);
  rotate(10);
  rect(0, 0, 10, 100);
  pop();
  triangle(250, 410, 200, 430, 260, 460);
  fill(255, 179, 179);
  textSize(25);
  text("Press for Answers", 210, 520);
}
