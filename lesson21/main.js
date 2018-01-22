'use strict';
console.log('work');

var slider = document.getElementById('slider');
var progres = document.getElementById('progres');
var active = document.querySelector('#slider .active');
var progress = 0;

var timer = setInterval(function(){
    
    if (progress == 100){
        if (active.nextElementSibling){
            active.classList.remove('active');
            active.nextElementSibling.classList.add('active');
            active = active.nextElementSibling;
            
        }else{
            active.classList.remove('active');
            active.parentElement.firstElementChild.classList.add('active');
            active = active.parentElement.firstElementChild;
        }
        progress = 0;
    }
    progres.style.width = progress + '%';
    progress++;
    // console.log(progress);
},100);
