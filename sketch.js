var myOsc;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  myOsc = new p5.SinOsc();
  myOsc.amp(0.5);
  myOsc2 = new p5.SinOsc();
  myOsc2.amp(0.5);
}

function draw() {
  background(220);
  myOsc.freq(mouseX);
  myOsc2.freq(mouseY);
   let hue = mouseX / 4
   let saturation = mouseY / 4
   background (hue, saturation, 30)
  
  let x = 10
  let y = 10
  let z = 5
  
  beginShape()
  for (let i=0; i<200; i++) {
    x = x + mouseX;
    y = y + mouseY;
    z = z + mouseX+mouseY;
    square(x, y, z)
  }
  endShape()
  
  beginShape()
  for (let i=0; i<200; i++) {
    x = x + mouseX*2;
    y = y + mouseY*2;
    z = z + mouseX+mouseY;
    square(x, y, z)
  }
  endShape()
  
}


function mousePressed() 
{
  myOsc.start();
  myOsc2.start();
}