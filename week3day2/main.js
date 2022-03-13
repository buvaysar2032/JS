// 1 Задание

function name1(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
name1(12,34,'abc');

// 2 Задание

function name2(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    } else return 0;
}
console.log(name2(2,4));
// Не уверен

// 3 Задание

const sum = (a, b) => {
    let result = a + b;
    return result
}
console.log(sum(5,10));

// Другими словами, это более короткий вариант такой записи.

let sum1 = (a, b) => a + b;
console.log(sum1(5,5));

let sum2 = (a, b) => a - b;
console.log(sum2(10,5));

let sum3 = (a, b) => a * b;
console.log(sum3(2,2));

let sum4 = (a, b) => a / b;
console.log(sum4(10,5));

// 4 Задание

function hello(name) {
    console.log('Здравствуйте ' + name);
}
hello('гость');

// 5 Задание

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
// fib(77); // вычисляется очень долго

// 6 Задание

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) );
alert( fib(7) );
alert( fib(77) );