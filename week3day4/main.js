// 1 Задание   Выведите на экран значение в поле a двумя способами: через квадратные скобки и как свойство объекта

let user = {a: 'a', b: 'b', c: 'c'}
// alert(user.a);
// alert(user['a']);

// 2 Задание   Создайте копию этого объекта посредством: Метода Object.assign, Spread-оператора

let obj = { a: 2, b: 'Coding' };
let clone = Object.assign({}, obj);
let objclone = {...obj};
console.log(objclone);
console.log(clone);

// 3 Задание   Добавьте ему поле b содержащее число 5 и удалите поле a.

let user1 = {a: 4};
delete user1['a'];
user1.b = 5;
console.log(user1)

// 5 Задание   Создайте массив чисел от 0 до 10 и  выведите его в консоль двумя разными способами:
// посредством цикла for..in и цикла for..of

let name = [1,2,3,4,5,6,7,8,9,10];
for (let i in name) {
    console.log(i);
}

for (let i of name) {
    console.log(i);
}

// 10 Задание   Создайте двумерный массив чисел, заполните его случайными числами от 0 до 10
// и выведите его в консоль в виде таблицы

let items = [
    [0,2,4,6,8,10],
    [1,3,5,7,9]
]
console.log(items);
// console.log(items[1][1]);  // 3

// 11 Задание   Создайте двумерный массив с двумя ключами: en и ru. Пусть первый массив содержит названия месяцев на
// английском, а второй - на русском. Напишите функцию, которая по языку и числу месяца возвращает его название

let arrMonth = new Map([
    ['en', 'may'],
    ['ru', 'май']
])

function getKey(value) {
    return [...arrMonth].find(([key, val]) => val == value)[1]
}

console.log('en - ', getKey('may'));
console.log('ru - ', getKey('май'));

// 12 Задание   Реализуйте функцию, которая позволяет полностью клонировать объект

let user2 = {
    name: "Иван",
    age: 30
};
let clone2 = {};
for (let key in user2) {
    clone2[key] = user2[key];
}
console.log(clone2.name);
console.log(clone2.age);
console.log(user2.name);
console.log(user2.age);

// 13 Задание   Напишите функцию в одну строчку, которая вычисляет сумму всех чисел в массиве

const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a,0);
console.log(sum);

// 14 Задание   Реализуйте функцию, которая создаёт новый объект с заданным набором полей и с другим объектом
// в качестве прототипа

let newObjFunc = (protObj) => {
    let obj = {
        name: "",
        id: 1,
        surname: '',
        proto: protObj
    }
    return obj;
}

// 15 Задание   Реализуйте функцию, которая объединяет все массивы, являющиеся частью другого массива в один массив

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// 16 Задание
/*
let arr1 = [];
let arr2 = [];
console.log(arr1 + arr2);
 */
/*
let arr3 = [10];
let arr4 = [1];
console.log(arr3 + arr4);
 */
/*
let arr1 = [];
let arr2 = [];
console.log(arr1 - arr2);
 */
/*
let arr1 = [];
let arr2 =+[];
console.log(arr2);
 */
/*
let arr2 =+{};
console.log(arr2);
 */
/*
let arr1 = {};
let arr2 = {};
console.log(arr1 + arr2);
 */
/*
let arr1 = {};
let arr2 = {};
console.log(arr1 - arr2);
 */
/*
let arr2 =!{};
console.log(arr2);
 */
/*
let arr1 = [];
let arr2 = [];
console.log(arr1 == arr2);
 */
/*
let arr1 = {};
let arr2 = {};
console.log(arr1 === arr2);
 */

// 17 Задание

let nameAge = {
    firstName : 'Иван',
    lastName: 'Иванов',
    years: 25
}
let {firstName, lastName} = nameAge ;
let {years} = nameAge;
console.log(firstName, lastName);
console.log(years);

// 18 Задание

let days = [
    'Понедельник',
    'Вторник',
    'Среда'
]
// let [monday, tuesday, wednesday] = days;
let [wednesday, tuesday, monday] = days;
console.log(monday);
console.log(tuesday);
console.log(wednesday);

// 19 Задание

let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

// 20 Задание

const items4 = [1, 2, 3, 4, 5]

const insert = (arr, index, newItem) =>
    [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index)
    ]
const result = insert(items4, 1, 10)

console.log(result);

// 21 Задание

let obj_1 = {
    a: 1,
    b: 2,
};
let objCopy = Object.assign({}, obj_1);
console.log(objCopy);
objCopy.b = 89;
console.log(objCopy);

// 22 Задание

const array11 = ['a', 'b', 'c'];
const array22 = [1, 2, 3];
const array33 = array11.concat(array22);

console.log(array33);

// 19 задание

let arr = ["Ilya", "Kantor"]
arr = ["Kantor", "Ilya"]
let [firstName3, surname] = arr;
alert(firstName3);  // Kantor
alert(surname); // Ilya
console.log(arr);                     // Это не правильно тут я не поменял их, а просто задал новые значение

let users = [
    { id: 1, name: 'Dmitriy'},
    { id: 2, name: 'Igor' },
    { id: 3, name: 'Pavel'}]
const [one, two, three] = users // <--- вот это деструктуризация
users = [three, two, one]
console.log(users)                   // А здесь поменял их местами и сделал все что нужно