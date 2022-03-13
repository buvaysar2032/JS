let name = 'Бувайсар';
alert(name);

let func = prompt("сообщение");
alert(func);

let num = 3;
let str ='';
alert(Boolean( num));
alert(Boolean( str));

var a1 =+prompt("Введите число a");
var b1 =+prompt("Введите число b");
var c1 = 0;
c1 = (Number(a1) + Number(b1));
alert("Cумма чисел: " + c1);

let five = 5;
let two = 2;
console.log(five % two);


let a2 = 1, b2 = 1;

alert( ++a2 ); // 2, префиксная форма возвращает новое значение
alert( b2++ ); // 1, постфиксная форма возвращает старое значение
alert( a2 );
alert( b2 );


let even = prompt('Введите число');
if (even % 2 ===0) {
    console.log('Это четное число');
} else {
    console.log('Это четное число');
}

let number = 1;
let string = '1';
console.log(Boolean(number == string));
console.log(Boolean(number === string));

let zero = 0;
let c = false;
console.log(Boolean(zero == c));
console.log(Boolean(zero === c));

// 9 задание

console.log(typeof(11));
console.log(typeof(`"Hello"`));
console.log(typeof({ a: 1 }));
console.log(typeof(null));
console.log(typeof(false));

const A = 201;
A % 2 ? console.log("А нечётное") : console.log("А чётное");


let login = prompt('Введите логин');
let password = prompt('Введите пароль');
let reslog = 'buvaysar';
let respass = 2032;
if (reslog == login && respass == password) {
    console.log('Вы успешно вошли в систему');
} else {
    console.log('Пароль или логин введены не верно');
}

let a = '30';
console.log(!!a);