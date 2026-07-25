let scene = 0;
let video;
let checkbox;

function setup() {
  const host = document.querySelector(".consentful-sketch");
  const sketchWidth = Math.max(260, Math.floor(host.clientWidth));
  const sketchHeight = Math.max(420, Math.floor(window.innerHeight * 0.72));

  const canvas = createCanvas(sketchWidth, sketchHeight, WEBGL);
  canvas.parent(host);

  checkbox = createCheckbox("Consent to Use the Camera");
  checkbox.parent(host);
  checkbox.changed(pixelcamera);
  checkbox.style("color", "white");
  checkbox.style("background", "pink");
  checkbox.style("font-size", "20px");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  noStroke();
}

function draw() {
  if (checkbox.checked()) {
    pixelcamera();
  } else {
    background("pink");
  }
}

function pixelcamera() {
  pointLight(255, 255, 255, width / 2, height / 2, 300);
  ambientLight(255);
  video.loadPixels();
  const boxSize = int(map(mouseX, 0, width, 12, 32));

  for (let y = 0; y < video.height; y += boxSize) {
    for (let x = 0; x < video.width; x += boxSize) {
      const index = (x + y * video.width) * 4;
      const r = video.pixels[index];
      const g = video.pixels[index + 1];
      const b = video.pixels[index + 2];
      const a = video.pixels[index + 3];
      const h = 1 - r / 255;
      push();
      fill(r, g, b, a);
      translate(x - width / 2, y - height / 2, boxSize / 2);
      rotateZ(h * TWO_PI);
      box(boxSize - 2, boxSize - 2, h * boxSize * 20);
      pop();
    }
  }
}

function windowResized() {
  const host = document.querySelector(".consentful-sketch");
  if (!host) return;
  resizeCanvas(
    Math.max(260, Math.floor(host.clientWidth)),
    Math.max(420, Math.floor(window.innerHeight * 0.72)),
  );
  video?.size(width, height);
}
