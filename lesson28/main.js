'use strict';
console.log('work lesson28');

var request = new XMLHttpRequest();
console.log(request);
request.open('GET', 'http://techslides.com/demos/sample-videos/small.mp4');
request.responseType = 'blob';
request.send();

request.addEventListener('load', function(){
    if (this.status == 200){
        console.log('OK');
        var url = URL.createObjectURL(request.response);
        var video = document.createElement('video');
        video.src = url;
        document.appendChild(video);
    }else{
        console.log('Error' + this.status);
    }
});

console.log(request.response);