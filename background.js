

class Background{
    constructor(){
        this.x = 0;
        this.velocity = 5;
        this.img = new Image();
        this.img.src = "img/background.png";
    }

    update(){
        this.x -= 1;
        if (this.x < -canvas.width){
            this.x = 0; 

        }
    }

    draw(){
        ctx.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
        ctx.drawImage(this.img, this.x + canvas.width, 0, canvas.width, canvas.height);
    }
}