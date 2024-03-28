

class Floor{
    constructor(){
        this.img = document.getElementById("floorImg");
        this.x = 0; 
    }

    update(){
        this.x -= 5;
        if (this.x < -canvas.width){
            this.x = 0;
        }
    }

    draw(){ 
        ctx.drawImage(this.img, this.x, canvas.height - 50,  canvas.width, 112);
        ctx.drawImage(this.img, this.x + canvas.width, canvas.height - 50,  canvas.width, 112);

    }  
}