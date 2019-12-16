let spielstart = false;
let speed = 0;
let fall = 0;
var state = 0;
var gelandet = 0;
let x = 300;
let y = 100;

function mousePressed() {
  if (mouseX > 40 && mouseX < 140 && mouseY > 50 && mouseY < 100) {
    spielstart = true;
  }
  if (mouseX > 440 && mouseX < 540 && mouseY > 50 && mouseY < 100) {
    spielstart = true;
    y = 100;
    speed = 0;
  }
}

function ufo(x, y) {
  //Ufo
  fill(214, 245, 245);
  ellipse(x, y + 50, 100, 100);
  fill(255);
  noStroke();
  fill(64);
  ellipse(x, y + 75, 150, 50);
  fill(128);
  ellipse(x, y + 55, 100, 20);
  fill(255, 191, 0);
  circle(x - 50, y + 75, 10);
  circle(x, y + 80, 10);
  circle(x + 50, y + 75, 10);
  //Alien
  fill(51, 153, 51);
  ellipse(x, y + 25, 30, 40);
  fill(0);
  ellipse(x - 5, y + 20, 5, 10);
  ellipse(x + 5, y + 20, 5, 10);
}

function flamme(x, y) {
  //Flamme
  fill(255, 191, 0);
  triangle(x, y + 100, x - 40, y + 150, x + 40, y + 150);
}

function draw() {
  clear();
  //Hintergrund
  background(0, 0, 77);
  //Boden
  fill(128);
  rect(-1, 500, 600, 120);
  fill(115);
  circle(50, 530, 25);
  circle(200, 550, 25);
  circle(350, 550, 25);
  circle(500, 580, 25);
  circle(80, 600, 25);
  circle(480, 525, 25);
  fill(89);
  circle(50, 530, 20);
  circle(200, 550, 20);
  circle(350, 550, 20);
  circle(500, 580, 20);
  circle(80, 600, 20);
  circle(480, 525, 20);
  //Sterne
  fill(255);
  circle(50, 20, 1);
  circle(150, 20, 1);
  circle(250, 100, 1);
  circle(50, 300, 1);
  circle(320, 320, 1);
  circle(450, 210, 1);
  circle(250, 450, 1);
  circle(500, 350, 1);
  circle(80, 470, 1);
  circle(160, 250, 1);
  circle(400, 40, 1);
  circle(420, 450, 1);
  circle(540, 480, 1);
  circle(300, 200, 1);
  circle(170, 360, 1);
  circle(530, 170, 1);
  circle(90, 180, 1);
  circle(300, 50, 1);
  circle(280, 250, 1);
  circle(400, 380, 1);
  //StartButton
  fill(0);
  rect(40, 50, 100, 50, 10);
  fill(255);
  textSize(20);
  text("Play", 70, 80);
  //ResetButton
  rect(440, 50, 100, 50, 10);
  fill(0);
  textSize(20);
  text("Reset", 460, 80);
  //Ufo
  ufo(x, y);

  if (spielstart === true) {
    y = y + speed;
    if (keyIsDown(38)) {
      speed = speed - 0.1;
    } else {
      speed = speed + 0.1;
    }
  }
  if (keyIsDown(38)) {
    flamme(x, y);
  }

  if (y >= 500) {
    if (speed > 6) {
      gelandet = 1;
    }
    if (speed < 6) {
      gelandet = 2;
    }
    if (gelandet == 1) {
      fill("red");
      textSize(40);
      text("👎🏽 Loser 👎🏽", 180, 50);
    } else if (gelandet == 2) {
      fill("green");
      textSize(40);
      text("🎉 Champion 🎉", 150, 50);
    }
    console.log(gelandet);
    spielstart = false;
    y = 500;
  }
}
