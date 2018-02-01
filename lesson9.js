'use strict'
const arr = ['a', 'b', 'c', 'd'];
function x(element, index, array){
    console.log(element + ' in ' + index, array);
}
arr.forEach(x);

var a = [1,2,3,4,5,6];
a.forEach(function(e, i, a){
    (e % 2 === 0) ? console.log(e) : false;
});

const arr1 = ['a',, 'b',, 'c', 'd'];
arr.map(function(e,i){
    return 0;
});
arr1.map(function(e,i){
    return i + ' ' + e;
});

arr.filter(function(e,i){
    return (i % 2 ==0 ) ? true : false;
});

var c = [1,2,3,4,5,6];
c.every(function(e){
    return (e < 6) ? true : false;
});

var t = [1,2,3,5,6,8];
t.reduce(function(min, e){
    return (min > e) ? min : e;
    // console.log('acc: ', min, 'cur: ', e);
});

var t = [1,2,3,5,6,3,8];
t.reduceRight(function(min, e){
    return (min > e) ? min : e;
    // console.log('acc: ', min, 'cur: ', e);
});

t.indexOf(2);
t.lastIndexOf(3);

function singleExemplar(a) {
    var tmp = [];
    a : for (var i = 0; i < a.length; i++){
        var flag = 1;
        for (var j = 0; j < tmp.length; j++){
            if (a[i] === tmp[j] || ( a[i] !== a[i] && tmp[j] !== tmp[j] ) ){
                continue a;
            }
        }
        tmp.push(a[i]);
    }
    return tmp;
}
var myArray = [null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {a:1}, null, NaN, 1, 3];
console.log(singleExemplar(myArray));

var myArray1 = [null, 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]];

function exNaN(a, b){
    return (a!==a && b!==b) ? true : false;
}
function exArray(a, b){
    if (a.length !== b.length) return false;
    for (var i = 0; i < b.length ; i++){
        if (a[i] !== b[i] && !exNaN(a[i],b[i])) return false;
    }
    return true;
}
