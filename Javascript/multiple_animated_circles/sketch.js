function setup() {
  createCanvas(900, 400, WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(29)
  rotateX(60)
  rotateY(50)
  noFill()
  stroke(255)

  for (let index = 0; index < 20; index++) {
  
    let r = map(sin(frameCount), -1, 1, 0, 255);
    let g = map(index, 0, 20, 0, 255);
    let b = map(cos(frameCount), -1, 1, 255, 0)
    stroke(r, g, b)

    beginShape()

    for (let j = 0; j < 360; j += 10) {
      let rad = index * 8;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount + index * 10) * 50;

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}
