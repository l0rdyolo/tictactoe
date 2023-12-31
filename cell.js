import { ctx ,globals} from "./app.js";

export default class Cell{
    constructor(i,j){
        this.i = i;
        this.j = j;
        this.size = globals.cellSize;
        this.position = {x : (i * this.size)   , y : (j *  this.size)}

        this.color = globals.colors.xo

        
        this.clicked = false;
        this.x = false;

        this.neighbors = [];

    }

    resizeCell(i,j){
        this.size = globals.cellSize;
        this.position = {x : (i * this.size)  , y : (j *  this.size)}
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.position.x,this.position.y,this.size,this.size);
        ctx.strokeStyle = globals.colors.bodyBg;
        ctx.lineWidth = 9;
        ctx.stroke();
        ctx.closePath();

        if(!this.clicked) return;
        if(this.x){
            ctx.beginPath();
            ctx.font = `${this.size}px arial`;
            ctx.fillStyle = this.color;

            ctx.fillText(
                "X",
                this.position.x + this.size/6 ,
                this.position.y + (this.size - (this.size / 8))
            )
            ctx.fill();

            ctx.closePath();
        }
        else{
            ctx.beginPath();
            ctx.font = `${this.size}px arial`;

            ctx.fillStyle = this.color;

            ctx.fillText(
                "O",
                this.position.x + this.size/10 ,
                this.position.y + (this.size - (this.size / 6))
            )
            ctx.fill();
            ctx.closePath();
        }
        
    }

    playX(){
        this.clicked = true;
        this.x = true;
    }

    playO(){
        this.clicked = true;
        this.x = false;
    }

    resetCell(){
        this.clicked = false;
        this.x = false;
        this.color = globals.colors.xo;
    }
    
    update(){
    }
}