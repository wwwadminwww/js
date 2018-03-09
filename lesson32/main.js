'use strict';
function reverse(a){
    var b = a.toString();
    var c = b.split('');
    var d = c.reverse().join('');
    var res = parseInt(d);
        if (a < 0) {
            return res * -1;
        }else{
            return res;
        }
}

function reverse2(a){
    return Math.sign(a) * parseInt(a.toString().split('').reverse().join(''));
}

function foreachMy(arr, callback){
    for(var i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}

function getTransformArray(arr, callback){
    var newArr = [];
    foreachMy(arr, function(e){
        newArr.push(callback(e));
    });
    return newArr;
}

function getFilterArray(arr, callback){
    var lastArr = [];
    foreachMy(arr, function(e){
        if (callback(e)){
            lastArr.push(e);
        }
    });
    return lastArr;
}

console.log(reverse(-32));
console.log(reverse2(-46));

console.log(getTransformArray(['aaa','bbb'], function(e){ return e.toUpperCase() }));
console.log(getFilterArray([1,NaN,'bbb'], isNaN));

