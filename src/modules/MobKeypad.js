import '../css/style.css';
import {isMobile} from 'react-device-detect';

function MobKeypad() {

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

const mobButtons = document.getElementsByClassName("mob_btn");
const mobAction = (ev) => {
    const dir = ev.target.dataset.move
    edge(dir);
}
for (let i = 0; i < mobButtons.length; i++) {
    mobButtons[i].addEventListener('click', mobAction, false);
}

return (
    <div class="mob_keyWrapper">
        <div>
            <div id="mob_keypad">
                <table>
                    <tr class="mob_tableRow">
                        <td class="mob_btn mob_leftBtn" rowspan="2" data-move="left">Left</td>
                        <td class="mob_btn mob_upBtn" colspan="2" data-move="up">Up</td>
                        <td class="mob_btn mob_rightBtn" rowspan="2" data-move="right">Right</td>
                    </tr>
                    <tr class="mob_tableRow">
                        <td class="mob_btn mob_downBtn" colspan="2" data-move="down">Down</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    );
}

export default MobKeypad;
