'use strict';
console.log('work');
var bar = document.getElementById('progress_bar');
var background = `linear-gradient(90deg,red ${progress}%,transparent ${progress}%)`;
console.dir(getComputedStyle(bar));
var progress = 0;
var percent = document.getElementById('percent');
var id = setInterval(function(){
    if (progress === 100){
        clearInterval(id);
    }else{
        ++progress;
        percent.style.width = `${progress}%`;
        // bar.style.background = `linear-gradient(90deg,red ${progress}%,transparent ${progress}%)`;
        percent.innerHTML = progress + "%";
        // console.log(++progress);
    }
    
}, 90);