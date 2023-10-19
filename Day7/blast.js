class Blast {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.size = 30;
    this.maxSize=100
    this.expanding = true;
    this.image = new Image();
    this.image.src = "./images/blast.png";
  }

  draw() {
    // console.log(this.x,this.y)
    if (this.expanding) {
      c.beginPath();
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size,
        this.size
      );
      this.size += 1.2; // Increase the size
      if (this.size >= this.maxSize) {
        this.expanding = false;
      }
    }
  }
  update() {
    this.draw();
  }
}
