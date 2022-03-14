// Создайте объект вида { a: 1, b: 2, c: 3 }. Напишите функцию, которая выводит в консоль
// ключи и значения объекта в формате “${key - value}”

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

function name(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
name(obj);


// Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.

let arr1 = ['true'];
let arr2 = ['false']
let arr3 = ['JavaScript']

let map = new Map()

map.set(arr1, 'string');
map.set(arr2, 'string2');
map.set(arr3, 'string3');
console.log(map);

// Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей и переберите его циклом for-of.

const map1 = new Map([
    ['array1'],
    ['array2'],
    ['array3']
])

const arrKey = map1.keys();
console.log(arrKey);

for (let arr of map1.keys()) {
    console.log(arr);
}

// Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
// Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода has проверьте наличие элемента со значением 3,
// а затем элемента со значением 4.

console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.has(4));

// Пусть дан массив. С помощью Set получите этот же массив, но без дублирующихся элементов

let myArray = ['a', 1, 'b', 2, '1'];

let newArray = [...new Set(myArray)];
console.log(newArray);

// Создайте объект Map в который запишите названия дней недели на русском языке в качестве значений
// и соответствующие им названия дней недели на английском в качестве ключей

let month = new Map()
month.set('January', 'Январь');
month.set('February', 'Февраль');
month.set('March', 'Март');
console.log(month);