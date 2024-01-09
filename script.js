// document.addEventListener('Keydown',(e)=>{
// console.log(keycode);
// })
// document.onkeydown = function(e){
//     console.log('key are:',e.keyCode)
// }
let score=0;
let cross=true;
let audio=new Audio('music.mp3');
document.addEventListener('keydown',(e)=>{
console.log(e.keyCode)
if(e.keyCode==38)
{
    let dino=document.querySelector('.dino');
   dino.classList.add('animatedino');
   setTimeout(()=>{
    dino.classList.remove('animatedino');
   },700)


}
else if(e.keyCode===39)
{  let dino=document.querySelector('.dino');
    dino.style.left=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))+140+'px'
}
else if(e.keyCode===37)
{  let dino=document.querySelector('.dino');
    dino.style.left=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))-140+'px'
}

})
setInterval(()=>{
    let dino=document.querySelector('.dino');
    let dragon=document.querySelector('.dragon');
  let   dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
  let   dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
  let   ox=parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'))
  let   oy=parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'))
    
    xdiff=Math.abs(dx-ox);
    ydiff=Math.abs(dy-oy);
    // console.log(xdiff)

    // console.log(ydiff)
    if(xdiff<150 && ydiff<15)
    {audio.pause();
        dragon.classList.remove('animatedrago');
        
        
    }
    else if (xdiff<150 &&cross===true){
      score++;
     
      updateScore(score);
      cross=false;
      setTimeout(()=>{
       cross=true;
      },1000)
        
    }
    else if(xdiff>150)
    {
        audio.play()
    }
    
},100)

function updateScore(score){
 document.getElementsByTagName('h1')[1].innerText=score;
}







// // setInterval(()=>{
//     dino=document.querySelector('.dino');
//     //  dx=window.getComputedStyle(dinod, null).getPropertyValue('left');
//     let dx=window.getComputedStyle(dino,null).getPropertyValue('left');
//     console.log(dx)
// // },700)
 