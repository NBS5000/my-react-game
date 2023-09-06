import '../css/style.css';

function Person() {

    const person = document.getElementById("person");
    const edge = (dir) => {
        console.log(person);
        const currentPosition = person.getBoundingClientRect();
        const currentTop = currentPosition.top;
        const currentLeft = currentPosition.left;
        switch (dir) {
            case "up":
                if(currentTop < 50){
                    console.log("At the top");
                }else{
                    const move = currentTop-50;
                    person.style.top = move+"px";
                    person.style.backgroundPosition = `-32px -96px`;
                }
                break;
            case "left":
                if(currentLeft < 50){
                    console.log("At the left");
                }else{
                    const move = currentLeft-50;
                    person.style.left = move+"px";
                    person.style.backgroundPosition = `-32px -32px`;
                }
                break;
            case "down":
                console.log(currentTop >=window.innerHeight-100)
                if(currentTop >= window.innerHeight-100){
                    console.log("At the bottom");
                }else{                        
                    const move = currentTop+50;
                    person.style.top = move+"px";
                    person.style.backgroundPosition = `-32px 0px`;
                }
                break;
            case "right":
                if(currentLeft >= window.innerWidth-100){
                    console.log("At the right");
                }else{
                    const move = currentLeft+50;
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



    return(
        <div id="person"></div>
    )

}

export default Person;
