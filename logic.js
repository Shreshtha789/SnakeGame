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

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        foodSound.play();
        let a =2;
        let b=16;
        food = {x: Math.round(a+(b-a)*Math.random()), y: Math.round(a+(b-a)*Math.random())};
    }

    //Moving the snake:

    for(let i=snakeArr.length-2; i>=0; i--){
        //to move body
        snakeArr[i+1] = {...snakeArr[i]}; 
    }
    //to move head
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Part: 2 display the snake and food:

    //Display the snake:
    let board = document.getElementById('board');
    board.innerHTML = '';
    snakeArr.forEach((elements, index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = elements.y;
        snakeElement.style.gridColumnStart = elements.x;
        if(index===0){
            snakeElement.classList = 'snake_head';
        }
        else{
            snakeElement.classList = 'snake_body';
        }
        board.appendChild(snakeElement);
    })

    //Display the food:
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList = 'food';
    board.appendChild(foodElement);
}


window.addEventListener('keydown', (e)=>{

    moveSound.play();
    switch(e.key){
        case 'ArrowUp':
            inputDir.x = 0;
            inputDir.y = -1;
            console.log('ArrowUp');
            break;

        case 'ArrowDown':
            inputDir.x = 0;
            inputDir.y = 1;
            console.log('ArrowDown');
            break;

        case 'ArrowLeft':
            inputDir.x = -1;
            inputDir.y = 0;
            console.log('ArrowLeft');
            break;

        case 'ArrowRight':
            inputDir.x = 1;
            inputDir.y = 0;
            console.log('ArrowRight');
            break;

        default:
            break;
    }
});