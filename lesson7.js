'use strict';
var list = document.querySelectorAll('*');
var count = 0;
for (var key in list){
	if (typeof list[key] === 'object')
	count++;
}
console.log(count);

var count = 0;
for (var key in list){
     console.dir(list[key] instanceof HTMLElement)
}

var list = document.querySelectorAll('*');
function showTypes(list){
    for(var key in list){
        console.log(typeof list[key]);
    }
}

var list = document.querySelectorAll('*');
function checkElType(list){
    var div = 0, span = 0, p = 0, a = 0;
    var str = '';
    for(var key in list){
        if (typeof list[key] === 'object')
        str = str + list[key].nodeName+'\n';
        if (list[key].nodeName == 'SPAN') span++;
        if (list[key].nodeName == 'DIV') div++;
        if (list[key].nodeName == 'A') a++;
        if (list[key].nodeName == 'P') p++;
        // console.log(list[key].nodeName);
    }
    console.log('Count of span is - ' + span);
    console.log('Count of div is - ' + div);
    console.log('Count of a is - ' + a);
    console.log('Count of p is - ' + p);
    return str;
}
console.log(checkElType(list));

var user = {
    name : 'Denis',
    surname : 'Solovyov',
    coins : 25,
    birthday : '14.07.1986',
}
for (var key in user){
    console.log(key + ' ' + user[key]);
}
delete user.coins;
for (var key in user){
    console.log(key + ' ' + user[key]);
}

var list = document.querySelectorAll('*');
var str = '';
for(var key in list){
    if (typeof list[key] === 'object')
    str = str + list[key].nodeName+'\n';
}
var span = -1;
var pos = -1;
do {
    span++;
    pos = str.indexOf('SPAN', pos + 1);
} while (pos !== -1)
console.log(span);