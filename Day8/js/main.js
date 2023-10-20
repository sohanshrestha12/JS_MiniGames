let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let bird = new Bird();

render=()=>{
    c.clearRect(0,0,canvas.clientWidth,canvas.height);

    bird.update();


    requestAnimationFrame(render);
}
render();

document.addEventListener('keyup',(e)=>{
    if(e.key === ' '){
        bird.jump();
    }
})