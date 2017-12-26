'use strict';
console.log('work');
var show = document.getElementById('showmodal_1');
var close = document.getElementById('closemodal_1');
var modal = document.getElementById('modal_1');

show.addEventListener('click', function(){
    modal.classList.remove('hide');
});

close.addEventListener('click', function(){
    modal.classList.add('hide');
});

function makeCat(name){
    return {
        name: name
    }
}

makeCat('Tom_1');

function Cat(){
    this.name = name;
}

new Cat('Tom_1');

