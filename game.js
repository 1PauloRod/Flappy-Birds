canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 


class Game{
    constructor(){
        this.player = new Player();
        this.pipe = new Pipe();
        this.background = new Background();
        this.floor = new Floor();
        this.lastUpdateTime = 0; 
        this.frameDuration = 1000/24;
        this.frameCount = 0;
        this.gameOver = false;
    }

    checkCollision(){
        console.log(this.gameOver);
        for (let i = 0; i < this.pipe.pipesBottom.length; i++){
            var pipeX = this.pipe.pipesBottom[i].x;
            var pipeY = this.pipe.pipesBottom[i].y;
            var pipeWidth = this.pipe.pipesBottom[i].width;
            var pipeHeight = this.pipe.pipesBottom[i].height;
            if (pipeX < this.player.position.x + this.player.size.width && 
                pipeX + pipeWidth > this.player.position.x &&
                this.player.position.y > pipeHeight + pipeY){

                    return true;
                }
        }

        for (let i = 0; i < this.pipe.pipesTop.length; i++){
            var pipeX = this.pipe.pipesTop[i].x;
            var pipeY = this.pipe.pipesTop[i].y;
            var pipeWidth = this.pipe.pipesTop[i].width;
            var pipeHeight = this.pipe.pipesTop[i].height;
            if (pipeX < this.player.position.x + this.player.size.width && 
                pipeX + pipeWidth > this.player.position.x &&
                this.player.position.y < pipeY){
                    
                    return true;
                }
        }
    }

    resetGame(){
        if (keys.space.pressed == true && this.gameOver == true){
            this.gameOver = false;
            this.pipe.pipesBottom.length = 0;
            this.pipe.pipesTop.length = 0;
            this.frame = 0;
        }
    }

    update(currentTime){ 
    
        if (!this.lastUpdateTime){
            this.lastUpdateTime = currentTime;
        }
        var deltaTime = currentTime - this.lastUpdateTime;

        if (keys.space.pressed == true && this.gameOver == false){
            if (deltaTime > this.frameDuration){
                if (this.player.frame < this.player.numberOfFrames - 1){
                    this.player.frame++;    
                }else{
                    this.player.frame = 0;
                }
                this.lastUpdateTime = currentTime;
            }
            this.player.velocity.y = -10; 
        }


        if (this.frameCount % 100 === 0){
            this.pipe.addPipe();
        }
        if (this.checkCollision() == true) this.gameOver = true;

        if (this.gameOver == true) {
        }else{
            this.pipe.update();
            this.background.update();    
            this.floor.update();
            this.frameCount++;    
        }
        this.player.update();
        this.resetGame();
    }

    draw(){
        this.background.draw();  
        this.pipe.draw();
        this.player.draw();
        this.floor.draw();
        
    }
}

var game = new Game();

function animate(currentTime){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(currentTime);
    game.draw();
    requestAnimationFrame(animate);
} animate();


