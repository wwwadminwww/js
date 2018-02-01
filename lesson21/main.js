'use strict';
console.log('work');

var slider = document.getElementById('slider');
var progres = document.getElementById('progres');
requestAnimationFrame(function(){
    progres.style.transition = 'width 8s linear';
    progres.style.width = '100%';
});
var active = document.querySelector('#slider .active');
var progress = 0;

var timer = setInterval(function(){
    
    if (progress == 40){
        requestAnimationFrame(function(){
            progres.style.transition = 'none';
            progres.style.width = '0%';
            requestAnimationFrame(function(){
                progres.style.transition = 'width 8s linear';
                progres.style.width = '100%';
            });
        });
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
    // progres.style.width = progress + '%';
    
    progress++;
    // console.log(progress);
},200);
