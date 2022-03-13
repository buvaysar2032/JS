// 1 Задание
let a = 0;
console.log(a);

for (; a < 10; a++) {
    // console.log(a);
} console.log(a);

let a1 = 0;
console.log(a1);
while (a1 < 10) {
    a1++
}
console.log(a1);

let a2 = 0;
console.log(a2);
do {
    // console.log(a2)
    a2++;
} while (a2 < 10) console.log(a2);
// 2 Задание

let func = prompt("Введите слово для выхода из цикла");
while (func != "Завершить") {
    func = prompt("Введите слово Завершить чтобы выйти из цикла")
}
alert('Вы вышли из цикла');

// 3 Задание

let i = 0;
for (; i < 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// 4 Задание
// 5 Задание
let a3 = 10; //переменная, которая дана
let b = 15; //переменная, которая дана

let c = a3;
a3 = b;
b = c; console.log(a,b,c);

// 6 Задание

let number1 = 143.2343;
console.log(number1.toFixed(2));

// 7 Задание

let number2 = 42.2654;
console.log(number2.toFixed(1));

// 8 Задание

console.log('I learn JavaScript'.indexOf('JavaScript'));

// 9 Задание

let counter = function (){
    let count = 0;
    return function (){
        count ++;
        return count;
    };
}();
alert(counter());
alert(counter());

// 10 Задание

let squarePow = (n, callbackFn) => {
    return callbackFn(n*n);
}
squarePow(2, (x) => {console.log(x*x);});