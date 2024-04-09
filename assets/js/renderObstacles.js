import { list } from "./obstacles";

function renderObstacle(){
    debugger
    const obstacleList = list();
    const scale = 32;
    for (let i = 0; i < obstacleList.length; i++) {
        const el = obstacleList[i];
        const baseDiv = document.getElementById("obstacleList");

        for (let i = 0; i < obstacleList.length; i++) {
            const el = obstacleList[i];
            
            const elStyle=`
            height:${scale*el.height}px;
            width:${scale*el.width}px;
            top:${scale*el.top}px;
            left:${scale*el.left}px;
            background:${el.imgPos};`
            
            const insert = document.createElement("div");
            insert.style.cssText = elStyle;
            insert.classList = el.classes;
            baseDiv.appendChild(insert);   
        }
    }
    
}
renderObstacle();