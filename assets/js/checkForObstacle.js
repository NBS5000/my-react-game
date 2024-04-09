import { list } from "./obstacles";

export function checkObstacle(x){
    const obstacleList = list();
    let obstacle = 0;
    let focus;
    for (let i = 0; i < obstacleList.length; i++) {
        
        const el = obstacleList[i];
        console.log("El: ",el)
        console.log("x: ",x.top," - el",el.top)
        let w = 0,h = 0;
        let width=0,height=0;
        while(w<el.width){
            (scale*w)+x.left==el.left?width=width+1:width=width+0;
            
            w++;
        }while(h<el.height){
            (scale*h)+x.top==el.top?height=height+1:height=height+0;
            
            h++;
        }
        if(height&&width){
            obstacle = obstacle+1;
            focus = el.focus;
        }else{
            obstacle = obstacle+0;
        }
        !focus?focus="There's nothing here":focus=el.focus;
    }
    return [obstacle,focus];
}