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

// switch(true) {
//     case time<=6:
//         alert(time + ' часов ночи')
//         break;
//     case time>=7 && time<=10:
//         alert(time + ' часов утра')
//         break;
//     case time>=11 && time<=17:
//         alert(time + ' часов дня')
//         break;
//     case time>=18 && time<=23:
//         alert(time + ' часов вечера') 
//         break;
//     default:
//         alert(' Введите время !!!!!!!!')
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