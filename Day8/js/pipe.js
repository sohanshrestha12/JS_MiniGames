class Pipe {
  constructor() {
    this.size = {
      width: 50,
      height: 300,
    };
    this.position = {
      x: canvas.width,
      y: Math.random() * (0 - -200) + -200,
    };
    this.velocity = {
      x: -1.5,
      y: 0,
    };
    this.gap = 130;
    this.pipeUp = new Image();
    this.pipeDown = new Image();
    this.pipeUp.src = "./img/pipeup.png";
    this.pipeDown.src = "./img/pipedown.png";
  }
  draw() {
    //pipe 1
    c.beginPath();
    c.drawImage(
      this.pipeUp,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );

    //pipe2
    c.beginPath();
    c.drawImage(
      this.pipeDown,
      this.position.x,
      this.position.y + this.size.height + this.gap,
      this.size.width,
      this.size.height
    );
  }
  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
      this.position.y = Math.random() * (0 - -250) + -250;
    }
    this.position.x += this.velocity.x;
  }
  collosion() {
    if (
      this.position.x <= bird.position.x + bird.size &&
      this.position.x + this.size.width >= bird.position.x &&
      this.position.y <= bird.position.y + bird.size &&
      this.position.y + this.size.height >= bird.position.y
    ) {
      bird.isAlive = false;
    }
    if (
      this.position.x <= bird.position.x + bird.size &&
      this.position.x + this.size.width >= bird.position.x &&
      this.position.y + this.size.height + this.gap <=
        bird.position.y + bird.size &&
      this.position.y + this.size.height + this.gap + this.size.height >=
        bird.position.y
    ) {
      bird.isAlive = false;
    }
  }
  update() {
    this.draw();
    if (bird.isAlive) {
      this.collosion();
      this.move();
    }
  }
}
