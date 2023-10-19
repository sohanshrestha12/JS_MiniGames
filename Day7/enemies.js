class Enemy {
  constructor() {
    this.size = Math.random() * (70 - 30) + 30;
    this.position = {
      x: Math.random() * (420 - 30) + 30,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.image = new Image();
    this.image.src='./images/rock.png';
  }

  draw() {
    c.beginPath();
    c.drawImage(this.image,this.position.x, this.position.y, this.size, this.size);
    c.fillStyle = "red";
    c.fill();
  }

  collisionWithShip(player) {
    if (
      this.position.x <= player.position.x + player.size.width &&
      this.position.x + this.size >= player.position.x &&
      this.position.y <= player.position.y + player.size.height &&
      this.position.y + this.size >= player.position.y
      ) {
      player.isAlive = false;
    }
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    if (player.isAlive) {
      this.move();
    }
  }
}
