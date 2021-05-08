let direction = {x:0,y:0};
let gameSound = new Audio('game music.mp3');
let speed = 2;
let score = 0;
let LastPainTime=0;
let snakearr=[
    {x:13, y:15}
]
food = {x:6, y:7}; 
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-LastPainTime)/1000 < 1/speed);{
        return;
    }
    LastPainTime = ctime;
    gamEngine();
}
function isCollide(sarr)
{
    for(let i =1; i< snakearr.length;i++){
        if(snake[i].x==snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0].x >= 18|| snake[0].x && snake[0].y >= 18 || snake[0].x <=y){
        return true;
    }
}
 function gamEngine(){

    if(isCollide(snakearr)){
        gameSound.pause();
        inputDir= {x:0 , y:0}
        alert('game over please press any key!')
        snakearr = [{x:13 , y:15}]
        gameSound.play()
        score= 0;
    }
    if(snakearr[0].y === food.y && snakearr[0].x === food.x){
        snakearr.unshift({x: snakearr[0].x + inputDir.x, y: snakearr[0].y + inputDir.y});
        let a =2;
        let b = 16;
        food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }
    for(let i = snakearr.length-2; i>=0;i--){
        const element =array[i];
        snakearr[i+1]= {...snakearr[i]};
    }

    snakearr[0].x+= inputDir.x;
    snakearr[0].y+=inputDir.y;

    board.innerHTML="";
    snakearr.forEach(e, index)=>{
        sankeElement = document.createElement('div');
        sankeElement.style.gridRowStart = e.y;
        sankeElement.style.gridColumnStart = e.x;
        sankeElement.classList.add('snake')
        if(index===0){
        sankeElement.classList.add('head')}
        board.appendChild(sankeElement)
    }
    foodElement = document.createElement('div');
    foodsankeElement.style.gridRowStart = food.y;
    foodsankeElement.style.gridColumnStart = food.x;
    foodsankeElement.classList.add('food')
    board.appendChild(foodElement)

 }
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    inputDir = {x:0,y:1}
    switch (e.key){
        case"ArrowUp":
        inputDir.x=0;
        inputDir.y=-1;
        console.log("ArrowUp")
        break;
        case"ArrowDown":
        inputDir.x=0;
        inputDir.y=1;
        console.log("ArrowDown")
        break;
        case"ArrowLeft":
        inputDir.x=-1;
        inputDir.y=0;
        console.log("ArrowLeft")
        break;
        case"ArrowRight":
        inputDir.x=1;
        inputDir.y=0;
        console.log("ArrowRight")
        break;
    }
});