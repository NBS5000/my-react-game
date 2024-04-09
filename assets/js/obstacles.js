
export function list(){
    const furnitureImage = "url('../img/furniture1.png')";

    const obstacleList = [
        {
            "name":"smallTable",
            "label":"small table",
            "top": 3,
            "left": 1,
            "focus":"There's nothing on this table",
            "width":1,
            "height":1,
            "imgPos":`${furnitureImage} 4px 4px`,
            "classes":"obstacle furniture",
            "room":"test"
        },
        {
            "name":"sofaFront",
            "label":"sofa",
            "top": 160,
            "left": 96,
            "focus":"Shall I sit down?",
            "width":2,
            "height":1,
            "imgPos":`${furnitureImage} 102px 189px`,
            "classes":"obstacle furniture",
            "room":"test"
        }
    ];
    return obstacleList;

}