'use strict';
// function charSum(){
//     var m = '', sum = 0;
//     m = prompt('type some integer number: ', 0);
//     for (var i = 0; i < m.length; i++){
//         sum = sum + +m[i];
//     }
//     console.log(sum);
// }
// charSum();

// function primeNum(){
//     var num = 0, flag = false;
//     num = prompt('type there some integer number: ', 0);
//     if (num % 2 !== 0){
//         for (var i = 2; i < Math.sqrt(num); i++){
//             if (num % i === 0){
//                 break;
//             }
//         }
//         flag = true;
//     }
//     if (flag) {console.log('Number is prime');}
//     else {console.log('Number is not prime');}
// }
// primeNum();

// function indChar(){
//     var str = 'Мы заехали с Захаром в Запорожье';
//     for (var i = 1; i < str.length; i++){
//         if (str[i] === 'З') console.log('Index of symbol \'З\' is: ', i);
//         else if (str[i] === 'з') console.log('Index of symbol \'з\' is: ', i);
//     }
// }

function indMethod(){
    var text = 'The nationalism of Hamilton was undemocratic. The democracy of Jefferson was, in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyond the mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish. And it will be remembered that Lincolns party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The \"rail splitter\" from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools.';
    var patterns = ['was', 'of','in','new','from','this','rail splitter'];
    // var patterns = ['was'];
    
    for (var i = 0; i < patterns.length; i++){
        for (var j = 0; j < text.length; j++){
            var temp = '';
            for (var k = 0; k < patterns[i].length; k++){
                if (patterns[i][k] === text[j + k]){
                    temp += text[j+k];
                    if (patterns[i] === temp) {
                        console.log(patterns[i] + ' ' + j);
                        break;
                    }
                }
            }
        }
    }
}
indMethod();