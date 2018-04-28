'use strict';

for (var i = 1, str = '#'; i < 8; i++, str += '#'){
    
    console.log(str);
}

for (var j = 1; j < 100; j++){
    if (((j % 3) === 0) && ((j % 5) === 0)) console.log('FizzBuzz')
    else if ((j % 3) === 0) console.log('Fizz')
    else if ((j % 5) === 0) console.log('Buzz')
    else console.log(j);
}

// var str = '';
// for (var k = 0; k < 18; k++ ){
//     for(var m = 0; m < 9; m++){
//         if ((m%2!==0) && (k%2===0)) str +='# '; else if ((m%2===0) && (k%2!==0)) str += ' #';
//     }
//     console.log(str);
//     str = '';
// }
