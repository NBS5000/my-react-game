/*const person = document.getElementById("person");
const obstacleList = [
    {
        "name":"chair",
        "top": 96,
        "left": 32
    }
];
function checkObstacle(x,y){
    console.log("Hello there");
    let obstacle = 0;
    for (let i = 0; i < obstacleList.length; i++) {
        const el = obstacleList[i];
        if(x==el.top&&y==el.left){
            obstacle = obstacle+1;
        }else{
            obstacle = obstacle+0;
        }
        return obstacle;
    }
}

const edge = (dir) => {
    //debugger
    const currentPosition = person.node.getBoundingClientRect();
    const currentTop = currentPosition.top;
    const currentLeft = currentPosition.left;
    const scale = 32;
    switch (dir) {
        case "up":
            if(currentTop < 50){
                console.log("At the top");
            }else{
                const move = currentTop-scale;
                person.style.top = move+"px";
                person.style.backgroundPosition = `-32px -96px`;
            }
            break;
        case "left":
            
            if(currentLeft < 50){
                console.log("At the left");
            }else{
                const intentLeft = currentLeft + scale;
                const intentTop = currentTop;
                if(checkObstacle(intentLeft,intentTop)){
                    console.log("There's an obstacle")
                }else{
                    const move = currentLeft-scale;
                    person.style.left = move+"px";
                    person.style.backgroundPosition = `-32px -32px`;
                }
            }
            break;
        case "down":
            console.log(currentTop >=window.innerHeight-100)
            if(currentTop >= window.innerHeight-100){
                console.log("At the bottom");
            }else{                        
                const move = currentTop+scale;
                person.style.top = move+"px";
                person.style.backgroundPosition = `-32px 0px`;
            }
            break;
        case "right":
            if(currentLeft >= window.innerWidth-100){
                console.log("At the right");
            }else{
                const move = currentLeft+scale;
                person.style.left = move+"px";
                person.style.backgroundPosition = `-32px -64px`;
            }
            break;
        default:
            break;
    }

}
        
const move = {
    up() {
        console.log("Moved up");
        edge("up");
    },
    down() {
        console.log("Moved down");
        edge("down");
    },
    left(){
        console.log("Moved left");
        edge("left");
    },
    right(){
        console.log("Moved right");
        edge("right");
    },
};
const action = {
    w: {keydown: move.up},
    ArrowUp: {keydown: move.up},
    s: {keydown: move.down},
    ArrowDown: {keydown: move.down},
    a: {keydown: move.left},
    ArrowLeft: {keydown: move.left},
    d: {keydown: move.right},
    ArrowRight: {keydown: move.right}
}
const handler = (ev) => {
    action[ev.key][ev.type]();
};
['keydown'].forEach((evType) => {document.body.addEventListener(evType,handler);});

const mobButtons = document.getElementsByClassName("mob_btn");
const mobAction = (ev) => {
    const dir = ev.target.dataset.move
    edge(dir);
}
for (let i = 0; i < mobButtons.length; i++) {
    mobButtons[i].addEventListener('click', mobAction, false);
}


const imgMove = (dir) => {
    person.style.backgroundPosition = `-256px 0px`;
}*/