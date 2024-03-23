


class Pipe{
    constructor(){
        this.pipesTop = [];
        this.pipesBottom = [];
        this.offset = 70;
        this.min = 100;
        this.max = 500;
        this.imgPipe = new Image();
        this.imgPipe.src = "img/pipe.png";
        this.imgPipeTop = new Image();
        this.imgPipeTop.src = "img/pipeTop.png";  
        this.color_test = "blue"; 
    }

    addPipe(){
            var pipeY = canvas.height + Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            this.pipesBottom.push({
                img: this.imgPipe,
                x: canvas.width, 
                y: pipeY, 
                width: 52*3, 
                height: -320*2, 
                velocity: 5, 
                color: this.color_test
        });

        this.pipesTop.push({
            img: this.imgPipeTop,
            x: canvas.width, 
            y: pipeY - canvas.height + this.offset, 
            width: 52*3, 
            height: -320*2, 
            velocity: 5, 
            color: this.color_test
        });
    }


    update(){
        this.pipesBottom.forEach(function(pipe){
        pipe.x -= pipe.velocity;
        });

        this.pipesTop.forEach(function(pipe){
            pipe.x -= pipe.velocity;
            });
    }

    draw(){
        
        if (this.pipesBottom.length != 0){
            this.pipesBottom.forEach(function(pipe){
                
                ctx.drawImage(pipe.img, 
                    0, 0, 
                    52, 320, 
                    pipe.x, pipe.y, 
                    pipe.width, pipe.height);
                
                /*ctx.beginPath();
                ctx.fillStyle = pipe.color; 
                ctx.rect(pipe.x,  pipe.y, 
                pipe.width, pipe.height);
                ctx.fill();
                ctx.closePath()*/
            })

            this.pipesTop.forEach(function(pipe){
                ctx.drawImage(pipe.img, 
                    0, 0, 
                    52, 320, 
                    pipe.x, pipe.y, 
                    pipe.width, pipe.height);
                
                /*ctx.beginPath();
                ctx.fillStyle = pipe.color; 
                ctx.rect(pipe.x,  pipe.y, 
                pipe.width, pipe.height);
                ctx.fill();
                ctx.closePath()*/

            })
        
        
        }    
            

            /*ctx.beginPath();
            ctx.fillStyle = "blue"; 
            ctx.rect(this.positionTop.x, this.positionTop.y, 
                this.sizeTop.width, this.sizeTop.height);
            ctx.fill();
            ctx.closePath();

          
            ctx.drawImage(this.imgPipeTop, 
            0, 0, 
            52, 320, 
            this.positionTop.x, this.positionTop.y, 
            this.sizeTop.width, this.sizeTop.height);*/
        
    }

}