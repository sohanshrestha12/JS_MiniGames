class Player {
  constructor() {
    this.size = {
      width: 50,
      height: 50,
    };
    this.position = {
      x: canvas.width / 2.2,
      y: canvas.height / 1.3,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.isAlive = true;
    this.image = new Image();
    this.image.src = "./images/ship.png";
  }
  draw() {
      
      // //background
      // c.beginPath();
      // c.fillStyle = "white";
      // c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
      // c.fill();
      
      
    //collision mask
  
    // c.beginPath();
    // c.fillStyle = "green";
    // c.moveTo(this.position.x + 18, this.position.y + 30);

    // c.lineTo(this.position.x +22,this.position.y);
    // c.lineTo(this.position.x+28,this.position.y);
    // c.lineTo(this.position.x+32,this.position.y+19);
    // c.lineTo(this.position.x+50, this.position.y+19);
    // c.lineTo(this.position.x+this.size.width, this.position.y + this.size.height);
    // c.lineTo(this.position.x,this.position.y+this.size.height);
    // c.lineTo(this.position.x,this.position.y+19);
    // c.lineTo(this.position.x+20,this.position.y+19);
    // c.fill();

    c.beginPath();
    c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
    );
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  checkBoundary() {
    if (this.position.x <= 0) {
      this.position.x = 0;
      if (this.position.y + this.size.height >= canvas.height) {
        this.position.y = canvas.height - this.size.height;
      } else if (this.position.y < 0) {
        this.position.y = 0;
      }
    } else if (this.position.x + this.size.width >= canvas.width) {
      this.position.x = canvas.width - this.size.width;
      if (this.position.y + this.size.height >= canvas.height) {
        this.position.y = canvas.height - this.size.height;
      } else if (this.position.y < 0) {
        this.position.y = 0;
      }
    } else if (this.position.y + this.size.height >= canvas.height) {
      this.position.y = canvas.height - this.size.height;
    } else if (this.position.y < 0) {
      this.position.y = 0;
    }
  }
  update() {
    this.draw();
    if (player.isAlive) {
      this.move();
      this.checkBoundary();
    }
  }
}
