let x = [];
let y = [];
let r = [];
let points = 0;
let song;
let labelFontSize1 = 0;
let labelFontSize2 = 0;
let bounceFrameCount = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
  song = loadSound('fox.mp3');
	for (let i = 0; i < 50; i++) {
		x[i] = random(0, width);
		y[i] = random(0, height);
	}
	frameRate(60);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function keyTyped() {
  window.location.href = "http://hell.hazycora.com/lol";
  console.log("lmao gay")
}

function draw() {
  bounceFrameCount += abs(sin(frameCount/5))*0.2;
  colorMode(HSB);
	//background(255-noise(frameCount * 0.2)*30);
	background(bounceFrameCount*2-floor(bounceFrameCount*2/360)*360, 100, abs(sin(frameCount/10))*100)
  noStroke();
  colorMode(RGB);
	fill(666, 666, 666);
  textSize(10+abs(sin(frameCount/5))*30);
	for (let i = 0; i < floor(points/10)+1; i++) {
		if (i < floor(points/10)) {
			x[i] += map(noise(frameCount * 0.00002 + 4575 + i * 13), 0, 1, -1, 1)*100;
			y[i] += map(noise(frameCount * 2 + 3579 + i * 13), 0, 1, -1, 1)*100;
			x[i] = constrain(x[i], 0, width);
			y[i] = constrain(y[i], 0, height);
		} else {
			if (
				mouseX > x[i] - 20 &&
				mouseX < x[i] + 20 &&
				mouseY > y[i] - 20 &&
				mouseY < y[i] + 20
			) {
				points += 1;
				for (let i = 0; i < 50; i++) {
					x[i] = random(0, width);
					y[i] = random(0, height);
				}
			}
		}
    //rectMode(CENTER)
		//rect(x[i], y[i], 20, 20);
    textAlign(CENTER, CENTER);

    if(sin(frameCount/5)>0) {
      text("🙈", x[i], y[i]);
    }else{
      text("🐵", x[i], y[i]);
    }

	}

	avrg = millis() / 1000 / (points + 1); // calculates average

	textAlign(LEFT, TOP); // setting font alignment
	textSize(55); // setting font size

	// if (floor(points/10)+1 == 1) { // saying whether to use plural or not
	// 	text(floor(points/10)+1 + " circle wait no i mean 0 circles sorry i dont know what a circle is", 10, 10); // writing the text
	// } else {
	// 	text(floor(points/10)+1 + " circles wait no i mean 0 circles sorry i dont know what a circle is", 10, 10); // writing the text
	// }

  text("have fun, loser", 10, 10); // writing the text
  textAlign(LEFT, TOP);
  textSize(18);
  text("(rude)", 374, 37); //(calico) added text "rude"
  fill(231, 70, 167);
	textAlign(LEFT, TOP);
	textSize(20);
	text("take this number you slut: " + floor(avrg) + "", 10, 60);

  fill(76, 255, 5);

  fill(181, 116, 42);
  textAlign(RIGHT, BOTTOM);
  text("made with lovvvveeeee by hazel & hayden", width-10, height-10);
  fill(76, 255, 5);
  push();
  textAlign(CENTER, CENTER);
  translate(width/2+cos(frameCount/(sin(frameCount/30)*5+40))*width/3, height/2-10+sin(frameCount/30)*height/3);
  rotate((frameCount/20)*points);
  fill(0,0,0);
  text("🔥THE CIRCLE GAYME🔥", 0, 0);

  pop();
  push();
  translate(width/2+cos(frameCount/(sin(frameCount/30)*5+40))*width/3, height/2-10+sin(frameCount/30)*height/3);
  colorMode(HSB);
  let offset = 25
  ;
  fill((frameCount+offset)*2-floor((offset+frameCount)*2/360)*360, 100, 100);
  textAlign(CENTER, CENTER);
  text("^ epicest", -12, +20);
  pop();
  fill(116, 180, 42);
  textAlign(LEFT, BOTTOM);
  text("© 21st Century FOX", 10, height-10);
  colorMode(RGB);
  fill(0,0,0);
  beginShape();
  for (let i = 0; i < 100; i ++) {
    vertex(noise(i * 0.5, frameCount/60)*width, noise(i * 0.5+200, frameCount/60)*height);
  }
  endShape(CLOSE);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  textSize(random(30, 50));
  text("hell", width/2, height/2);
  // hover text
  rectMode(CENTER);
  if (mouseX>width-170&&mouseX<width-100&&mouseY>height-30) {
    labelFontSize1 += (20-labelFontSize1)/8;
  }else{
    labelFontSize1 += (0-labelFontSize1)/8;
  }
  if (labelFontSize1!=0) {
    let labelText1 = "@hazycora"
    textSize(labelFontSize1);
    fill(0,0,0, labelFontSize1*5);
    rect(mouseX, mouseY-20, textWidth(labelText1)+20, labelFontSize1+10, 20);
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    text(labelText1, mouseX, mouseY-20);
  }
  if (mouseX>width-70&&mouseX<width-0&&mouseY>height-30) {
    labelFontSize2 += (20-labelFontSize2)/8;
  }else{
    labelFontSize2 += (0-labelFontSize2)/8;
  }
  if (labelFontSize2!=0) {
    let labelText2 = "@Calico3Numbers"
    textSize(labelFontSize2);
    fill(0,0,0, labelFontSize2*5);
    rect(constrain(mouseX, 0, width-textWidth(labelText2)/2-20), mouseY-20, textWidth(labelText2)+20, labelFontSize2+10, 20);
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    text(labelText2, constrain(mouseX, 0, width-textWidth(labelText2)/2-20), mouseY-20);
  }
};
