function setup() {
    createCanvas(900, 400, WEBGL)
    angleMode(DEGREES)
  }
  
  function draw() {
    background(29)
    rotateX(60)
    noFill()
    stroke(255)
    
    noStroke();
    colorMode(HSB, 100);
    for (let index = 0; index < 50; index++) {

        rotate(frameCount / 35)
        beginShape()
  
        for (let j = 0; j < 360; j += 60) {
            let rad = index * 3;
            let x = rad * cos(j);
            let y = rad * sin(j);
            let z = sin(frameCount * 2 + index * 5) * 50;
    
            vertex(x, y, z)

            stroke(index, j, 100);
            point(index, j);
        }
        endShape(CLOSE)
    }
  }