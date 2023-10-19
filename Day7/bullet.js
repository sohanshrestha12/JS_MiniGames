class Bullet {
  constructor(x = 0, y = 0) {
    this.size = {
      width: 32,
      height: 32,
    };
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: -10,
    };
    this.image = new Image();
    this.image.src = "./images/bullet.png";
  }
  draw() {
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
  collisionWithEnemy(enemies) {
    for (let i = 0; i < enemies.length; i++) {
      if (
        this.position.x <= enemies[i].position.x + enemies[i].size &&
        this.position.x + this.size.width >= enemies[i].position.x &&
        this.position.y <= enemies[i].position.y + enemies[i].size &&
        this.position.y + this.size.height >= enemies[i].position.y
      ) {

        this.position.x = -500;
        this.velocity.y = 0;
        this.position.y = 0;
        enemies[i].position.y = 0;
        enemies[i].velocity.y = 0;
        enemies[i].position.x = -500;

      }
    }
  }
  update() {
    if (player.isAlive) {
      this.draw();
      this.move();
    }
  }
}
