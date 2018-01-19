'use strict';
console.log('work');
var ball = document.getElementById('ball');
var isDrag = false;
var overBox = false;
var mayDrop = false;
var box = document.getElementById('box');
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
        ball.style.pointerEvents = 'none';
    }
});
document.addEventListener('mouseup', function(e){
    isDrag = false;
    x = e.pageX;
    y = e.pageY;
    ball.style.pointerEvents = 'auto';

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
        ball.style.cssText = `left: ${left - dx}px; top: ${verh - dy}px; pointer-events: none;`;
        if (overBox) {
            var posBox = box.getBoundingClientRect();
            var posBall = ball.getBoundingClientRect();
            if (posBall.left >= posBox.left && posBall.right <= posBox.right && posBall.top >= posBox.top && posBall.bottom <= posBox.bottom){
                if (!mayDrop){
                    box.classList.add('mayDrop');
                    mayDrop = true;
                    console.log('ball in box');
                }
            } else {
                if (mayDrop){
                    box.classList.remove('mayDrop');
                    mayDrop = false;
                }
            }
        }
    }
});

box.addEventListener('mouseenter', function(){
    overBox = true;
    console.log('mouseenter');
});

box.addEventListener('mouseleave', function(){
    overBox = false;
    console.log('mouseleave');
});