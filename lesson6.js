// function pow(a,b){
//     var res = a;
//     for (var i=0; i < b-1; i++){
//         res = res * res;
//     }
//     return res;
// }
// console.log(pow(5,2));

// var str = '';
// function bigLetter(str){
//     var res = str[0].toUpperCase();
//     res = res + str.substring(1); 
//     return res;
// }
// console.log(bigLetter('httttt'));

// function zebra(str, flag) {
//     var res = '';
//     if (flag){
//         for (var i=0; i < str.length; i++){
//             if (i%2===0){
//                 res = res + str[i].toUpperCase();
//             } else {
//                 res = res + str[i];
//             }
//         }
//     } else {
//         for (var i=0; i < str.length; i++){
//             if (i%2!==0){
//                 res = res + str[i].toUpperCase();
//             } else {
//                 res = res + str[i];
//             }
//         }
//     }
//     return res;
// }

// console.log(zebra('gthy',true));

// function reverse(str){
//     var res = '';
//     for (var i = 0; i < str.length; i++){
//         res = res + str[(str.length-1) - i];
//     }
//     return res;
// }
// console.log(reverse('fghj'));

// function rr(min,max){
//     var res = 0;
//         res = Math.floor(min + (Math.random() * (max-min)));
//     return res;
// }
// console.log(rr(4,15));

// do{
//     var h = +prompt('hours', 0);
//     var m = +prompt('minutes', 0);
//     var s = +prompt('seconds', 0);
//     console.log(hmsToSecs(h,m,s));
//     var askend = confirm('End or not');
// }while(askend);

// function hmsToSecs(h,m,s){
//     return 3600 * h + 60 * m + s;
// }

// function includes(base,str){
//     return (base.indexOf(str) !== -1) ? true : false;
// }
// includes('hello', 'llf');

function endsWith(base, str){
    return (base.substr(base.length  - str.length,str.length) === str) ? true : false;
}
endsWith('hello','lo');