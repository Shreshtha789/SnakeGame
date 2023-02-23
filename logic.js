let inputDir = {x:0 , y:0};

const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');

let speed = 5;
let lastPaintTime = 0;


let snakeArr = [{x:5,y:10}];

let food = {x:10,y:5};



//Game Function:
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    //console.log(lastPaintTime);
    gameEngine();
}
window.requestAnimationFrame(main);


function isCollide(){
    return true;
}


function gameEngine(){
    //Part: 1 Updating the snake array and food.

    if(isCollide(snakeArr)){
        
    }

    //If you have eaten the food, increment the score and regenerate the food.

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.y){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        foodSound.play();
        let a =2;
        let b=16;
        food = {x: Math.round(a+(b-a)*Math.round), y: Math.round(a+(b-a)*Math.round)};
    }

    //Moving the snake:

    for(let i=snakeArr.length-2; i>=0; i--){
        //to move body
        snakeArr[i+1] = {...snakeArr[i]}; 
    }
    //to move head
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    
}