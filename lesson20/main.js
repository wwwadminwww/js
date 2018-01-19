'use strict';
console.log('work20');
var text = document.getElementById('id1');
var i = 9;
var vector = -1;
var timer1 = setInterval(function(){
    console.log(i);
    text.style.opacity = i / 10;
    if (i == 0 || i == 10){
        vector *= -1;
    }
    i += 1*vector;
}, 100);
