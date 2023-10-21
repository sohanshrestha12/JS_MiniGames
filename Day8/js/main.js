let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
const bird = new Bird();
const background = new Background();
const background2 = new Background(canvas.width, 0);
const pipe = new Pipe();

render=()=>{
    c.clearRect(0,0,canvas.clientWidth,canvas.height);

    background.update();
    background2.update();
    pipe.update();
    bird.update();

    requestAnimationFrame(render);
}
render();

document.addEventListener('keyup',(e)=>{
    if(e.key === ' '){
        bird.jump();
    }
})