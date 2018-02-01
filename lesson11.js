'use strict';
function rangeRandom(min, max) {
            return Math.round(min + Math.random() * (max - min));
        }

var str = '';
for (var i = 0; i <= rangeRandom(3, 8); i++){
    str += String.fromCharCode(rangeRandom(97, 122));
}
console.log(str);
