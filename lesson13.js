'use strict';
function func(){
    var counter = 0;
    var inc = function(){
        return ++counter;
    }
    return inc;
}
var a = func();
a();
a();
a();

function min(){
    console.log(arguments);
}
min(1, 2, 3, 4);

function mmin(){
    var min = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        min = (arguments[i] <= min) ? arguments[i] : min;
    }
    return console.log(min);
}
mmin(1,2,10,0,-2,6);

