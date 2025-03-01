// navbar function
const colors = ["red" , "orange","orange", "yellow", "green", "blue", "indigo", "violet" ];
let currentIndex=0;
function changeBackgroundColor(){
    document.body.style.backgroundColor = colors [currentIndex];
    currentIndex =(currentIndex + 1) % colors.length;
}