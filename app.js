// 1:


// var first = +prompt('Введите свой возраст')

// if(first <=18 && !isNaN(first)) {
//     alert('Вы еще молоды, Вам нужно учиться')
// }else if(first >18 && first<=50 && !isNaN(first)) {
//     alert('Вам нужно работать')
// }else if(first >50 && first<=59 && !isNaN(first)) {
//     alert('Вам скоро на пенсию')
// }else if(first >59 && first<=100 && !isNaN(first)) {
//     alert('Вы пенсионер')
// }else {
//     alert('Что-то пошло не так')
// }






// 2:


// var time = +prompt('Введите время')
// switch(time) {
// case 1: 
// alert('сейчас время ' +  time +   ' ночи')
// break;
// case 2: 
// alert('сейчас время ' +  time +   ' ночи')
// break;
// case 3: 
// alert('сейчас время ' +  time +   ' ночи')
// break;
// case 4: 
// alert('сейчас время ' +  time +   ' ночи')
// break;
// case 5: 
// alert('сейчас время ' +  time +   ' ночи')
// break;
// case 6: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 7: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 8: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 9: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 10: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 11: 
// alert('сейчас время ' +  time +   ' утра')
// break;
// case 12: 
// alert('сейчас время ' +  time +   ' дня')
// break;
// case 13: 
// alert('сейчас время ' +  ' 1 ' +   ' дня')
// break;
// case 14: 
// alert('сейчас время ' +  ' 2 ' +   ' дня')
// break;
// case 15: 
// alert('сейчас время ' +  ' 3 ' +   ' дня')
// break;
// case 16: 
// alert('сейчас время ' +  ' 4 ' +   ' дня')
// break;
// case 17: 
// alert('сейчас время ' +  ' 5 ' +   ' дня')
// break;
// case 18: 
// alert('сейчас время ' +  ' 6 ' +   ' вечера')
// break;
// case 19: 
// alert('сейчас время ' +  ' 7 ' +   ' вечера')
// break;
// case 20: 
// alert('сейчас время ' +  ' 8 ' +   ' вечера')
// break;
// case 21: 
// alert('сейчас время ' +  ' 9 ' +   ' вечера')
// break;
// case 22: 
// alert('сейчас время ' +  ' 10 ' +   ' вечера')
// break;
// case 23: 
// alert('сейчас время ' +  ' 11 ' +   ' вечера')
// break;
// case 24: 
// alert('сейчас время ' +  ' 12 ' +   ' ночи')
// break;
// default:
//     alert('Error')
// }






// 3:


var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if(a > b && a < c ){
    alert('Среднее число ' + a)
}else if(b > a && b < c) {
    alert('Среднее число ' + b)  
}else if(c > a && c < b) {
    alert('Среднее число ' + c)
}else {
    alert('Вы ввели не число')
}