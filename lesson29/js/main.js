'use strict';
console.log('work lesson29');

var div = document.getElementById('image');
var button = document.getElementById('submit');
var imgArr = ['img/image.jpeg', 'img/IT-Skills.jpg', 'img/img1.jpg'];
var bar = document.getElementById('bar');

submit.addEventListener('click', function(e){
    imgArr.forEach(function(e){
        var request = new XMLHttpRequest();
        request.open('GET', e);
        request.responseType = 'blob';
        request.send();
        
        request.addEventListener('load', function(e){
            if (request.status == 200){
                console.log('OK');
                var url = URL.createObjectURL(this.response);
                var img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
            }else{
                console.log('Error' + this.status);
            }
        
        });
    });
});

var a = new XMLHttpRequest();
console.log(a);
a.open('GET', 'Rammstein.mp4', true);
a.responseType = 'blob';
a.send();

a.addEventListener('progress', function(e){
    var progress = e.loaded/e.total * 100;
        console.log(progress);
        console.log(bar);
        bar.style.width = progress + "%";
        bar.innerHTML = progress;
});

