var x = 200;
var y = 200;
var randomNumber;
Avocado(200, -150);
function mousePressed() {
  randomNumber = random(1, 5);
  clear();
  Avocado(200, -150);

  if (Math.round(randomNumber) === 1) {
    textSize(30);
    fill(0, 0, 0);
    text("Hi", 390, 150);
  }
  if (Math.round(randomNumber) === 2) {
    textSize(30);
    fill(0, 0, 0);
    text("I´m Cute", 360, 150);
  }
  if (Math.round(randomNumber) === 3) {
    textSize(30);
    fill(0, 0, 0);
    text("I'm Yummy", 340, 150);
  }
  if (Math.round(randomNumber) === 4) {
    textSize(30);
    fill(0, 0, 0);
    text("Avocado Love", 320, 150);
  }
  if (Math.round(randomNumber) === 5) {
    textSize(30);
    fill(0, 0, 0);
    text("rawww", 370, 150);
  }
}

function Avocado(x, y) {
  background(255, 204, 204);
  //Avocado
  noStroke();
  fill(0, 77, 26);
  ellipse(90 + x, 420 + y, 90, 100);
  circle(90 + x, 470 + y, 60);
  fill(179, 179, 0);
  circle(90 + x, 470 + y, 50);
  ellipse(90 + x, 420 + y, 70, 80);
  fill(96, 64, 32);
  circle(90 + x, 470 + y, 35);
  fill(255);
  fill(0);
  circle(75 + x, 460 + y, 3);
  circle(105 + x, 460 + y, 3);
  circle(90 + x, 480 + y, 15);
  fill(96, 64, 32);
  circle(90 + x, 473 + y, 15);
  //Sprechblase
  fill(255);
  ellipse(410, 150, 200, 150);
  triangle(350, 180, 410, 200, 340, 240);
}
