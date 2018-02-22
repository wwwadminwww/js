// 'use strict';
// function a(){
//     if (false){
//         console.log(i);
//     }else{
//         console.log(i);
//         let i = 0;
//     }
// }
// a();

// const l = 1;
// l = 0;

var img = document.getElementById('img');
var basicHeight = img.clientHeight;
setInterval(function(){
    var currHeight =  img.clientHeight;
    var plus = (basicHeight/1000) * 100;  
    img.style.height = currHeight + plus + 'px';
    img.style.width =  img.clientWidth + plus + 'px';
    img.style.top = -+(img.clientTop + plus) + 'px';
    img.style.left = -+(img.clientLeft + plus) + 'px';
    console.log(plus);
},1000);

// const h = {
//     a:5
// }
// h.a = 6;
// console.log(h);

// function c(){
//     let i = 0;
//     function b(){
//         if (true) {
//             console.log(i);
//             let i = 1;
//         }
//     }
//     b();
// }
// c();

