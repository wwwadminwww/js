'use strict';
console.log('work');
var ball = document.getElementById('ball');
var isDrag = false;
var x = 0, y = 0, dx = 0, dy = 0, left = 0, verh = 0;
document.addEventListener('mousedown', function(e){
    var elem = e.target.closest('#ball');
    if (elem){
        isDrag = true;
        x = e.pageX;
        y = e.pageY;
        left = parseFloat(ball.style.left) || parseFloat(getComputedStyle(ball).left) || 0;
        verh = parseFloat(ball.style.top) || parseFloat(getComputedStyle(ball).top) || 0;
        console.log(isDrag, x, y);
    }
});
ball.addEventListener('mouseup', function(){
    isDrag = false;

    console.log(isDrag);
});
// ball.addEventListener('mouseleave', function(){
//     isDrag = false;
// });
document.addEventListener('mousemove', function(e){
    if (isDrag) {
        console.log(left, verh);
        dx = x - e.pageX;
        dy = y - e.pageY;
        ball.style.cssText = `left: ${left - dx}px; top: ${verh - dy}px;`;
    }
});