function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let shapes = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(255);

  if (frameCount % 10 === 0) {
    shapes.push(new Shape());
  }

  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

  shapes = shapes.filter(shape => shape.x < width + shape.width);
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = random(height);
    this.width = random(20, 50);
    this.height = random(20, 50);
    this.color = color(random(255), random(255), random(255), 25);
    this.speed = random(1, 5);
  }

  update() {
    this.x += this.speed;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
