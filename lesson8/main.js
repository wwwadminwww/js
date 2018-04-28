'use strict'
var a = [1,2,3];
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}
for(var i = a.length - 1; i >= 0; i--){
    console.log(a[i]);
}

var b = [];
for (var i = 0; i < a.length; i++){
    b[i] = a[i];
}
console.log(b);

var c = [1,2,3,4], str = 3;
function search(arr, str){
    var flag = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === str) {
            console.log('has element in - ' + i);
            flag = true;
        }
    }
    if (!flag){
        console.log('Array dont has this element');
    }
}
search(c,str);