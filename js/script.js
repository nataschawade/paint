var board = document.getElementById("board"); 


var color = "red"; 
var pen = false;
var width = "10px";
var height = "10px";

function mouse(event) {
    
    board.onmousemove = function(event) {

        //create div
    var drawing = document.createElement('div');
    board.appendChild(drawing);
    var distance = board.getBoundingClientRect().x; 
 
    // styling 
    drawing.style.backgroundColor = color;
    drawing.style.width= width ;
    drawing.style.height= height ;
    

    //position div
    var x = event.clientX - distance; 
    var y = event.clientY ;
    drawing.style.position ="absolute";
    drawing.style.left = x +"px" ;
    drawing.style.top = y + "px";
    }
    
    
   

}

 //mouse off but dosent work !!
 board.addEventListener('mouseup',stop);
 function stop () {
    board.onmousemove = null;
}

// turns mouse on when u click
board.addEventListener('mousedown',mouse);


document.querySelector(".orange").addEventListener('click',function(e){
    color = "orange";
 });

 document.querySelector(".blue").addEventListener('click',function(e){
    color = "blue";
 });

 document.querySelector(".green").addEventListener('click',function(e){
    color = "green";
 });

 document.querySelector(".yellow").addEventListener('click',function(e){
    color = "yellow";
 });

 document.querySelector(".pink").addEventListener('click',function(e){
    color = "pink";
 });

 document.querySelector(".white").addEventListener('click',function(e){
    color = "white";
 });

 document.querySelector(".big").addEventListener('click',function(e){
    height = "50px";
    width = "50px";
 });












//  document.getElementById("board").addEventListener('mouseup',mouse);





    
// //     // remove add event listener. 
// board.addEventListener('mouseup',function(e){
//     document.removeEventListener('mousedown',mouse);
// });

// }


//     var stop = 
// function stop () {
//     document.removeEventListener('mousedown',mouse) }
// }   





// var stop = documemt.getElementById("board");
// stop.addEventListener('click',stop);

// function stop () {
//     document.removeEventListener('mousedown',mouse) }

// var boardMove = document.getElementById("board"); 
// boardMove.addEventListener('mouseup',stop)













// document.getElementById("board").addEventListener("mouseup", function (event) {
//     e.preventDefault();
//     });

//should use event.target 