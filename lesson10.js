'use strict'
function fact(x){
    if (x === 1) return x * x;
    return x * fact(x - 1); 
}
console.log(fact(5));

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13],
    x = 7;
function binFind(arr,x){
    var from = 0,
        to = arr.length - 1,
        tmp = [];
        while ( to >= from){
            var p = Math.floor((from + to) / 2);
            if (x == arr[p]) return p
            else if (x < arr[p]) {to=p-1}
            else if (x > arr[p]) {from = p+1}
        }
        return -1;
}
console.log(binFind(arr, x));

function biner(arr,x,f,t){
    var f = f || 0;
    var t = t || arr.length - 1;
    var p = Math.floor((t + f)/2);
    if (t < f) return -1;
    if (arr[p] === x) return p;
    if (arr[p] > x) return biner(arr, x, f, p-1);
    if (arr[p] < x) return biner(arr, x, p+1, t);
    return -1;
}
console.log(biner(arr, 13));

var person = {
    name : 'Dima',
    getName : function(){
        console.log(this);
    }
}
person.getName();