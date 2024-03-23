
class Player{
    constructor(){
        this.position = {x: 100, y: 100};
        this.velocity = {x: 0, y: 0};
        this.size = {width: 128, height: 64};
        this.imgBird = new Image();
        this.imgBird.src = "img/bird.png";
        this.numberOfFrames = 4;
        this.frame = 0;
        
    }

    update(){
        this.position.y += this.velocity.y;
        if (this.position.y > canvas.height - 50 - this.size.height){
            this.velocity.y = 0;
        }else{
            this.velocity.y += GRAVITY;
        }
    }

    draw(){
        /*ctx.beginPath();
        ctx.fillStyle = "blue"; 
        ctx.rect(this.position.x, this.position.y, 
        this.size.width, this.size.height);
        ctx.fill();
        ctx.closePath();*/

        ctx.drawImage(this.imgBird, 
            this.frame * 64/4, 0, 
            64/4, 16, 
            this.position.x, this.position.y, 
            this.size.width, this.size.height);

    }
}