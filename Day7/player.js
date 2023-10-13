class Player{
    constructor(){
        this.size = {
            width : 50,
            height : 50
        }
        this.position = {
          x: canvas.width / 2.2,
          y: canvas.height / 1.3,
        };
        this.velocity = {
            x:0,
            y:0
        }
        this.image = new Image();
        this.image.src = './images/ship.png';
    }
    draw(){
        c.beginPath();
        c.drawImage(this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height)
    }
    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
    }
}