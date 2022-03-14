console.log('Hello');

const divConstClassName = document.getElementsByClassName('container');
const divConstQuery = document.querySelector('.container');
const divById = document.getElementById('main_container');
const divSelector = document.querySelector('#main_container');

console.log(divConstQuery);
console.log(divSelector);

// 2 Задание

const block = document.createElement('div'); // Создаем элемент div
block.className = 'name';
block.classList.add('block2');
block.id = 'name2';

console.log(block);

// 3 Задание

const mainBlock = document.querySelector('.main_block');
mainBlock.style.width = '250px';
mainBlock.style.height = '250px';   // Отличие в том что element.style меняет стили с помощью добавления атрибута в html файле

console.log(mainBlock);

// 4 Задание

let list = document.querySelectorAll('.list');
for (let list of document.querySelectorAll('.list')) {
    list.style.fontWeight = 'bold';
    list.style.background = 'grey';
    list.style.width = '200px';
}

console.log(list);

// 5 Задание

console.log('//5');

const inputValueFunc = inputId => {
    return document.querySelector(inputId).value;
}

console.log(inputValueFunc('#main_input'));

// 6 Задание

const disableInputFunc = inputClass => {
    return document.querySelector(inputClass).disabled = true;
}

console.log(disableInputFunc('.input'));

// 7 Задание

const blockDiv = document.querySelector('.block_div');
const span = document.createElement('span');
blockDiv.append(span.innerText = 'Lorem ipsum dolor sit amet. ');
blockDiv.append(span.innerText = 'Lorem ipsum dolor sit amet.');

console.log(blockDiv);

// 8 Задание

const textFunc = (id, str) => {
    const element = document.getElementById(id);
    return element.textContent = str;
    // return element.innerHTML = str;
}

console.log(textFunc('paragraph', 'some text'));

// 9 Задание

const parent = document.querySelector('.parent');
parent.firstElementChild.style.color = '#ae2012';

// 10 Задание

const first = document.getElementById('first');
first.nextElementSibling.nextElementSibling.insertAdjacentText('beforeend', '!!!');



//                             PART 2                            //



// 1 Задание

const clickButton = document.querySelector('.click-btn');

let counter = 0;
clickButton.onclick = () => {
    counter += 1;
    clickButton.innerHTML = `Click Counter: ${counter}`;
}

// 2 Задание

const scrolling = document.querySelector('.scroll-num');

window.addEventListener('scroll', () => {
    let scrollNum = window.scrollY;
    let flooredNum = Math.floor(scrollNum);
    scrolling.innerHTML = `Scrolling length: ${flooredNum} pixels`;
});

// 3 Задание

const tableNum = document.querySelectorAll('.number');

tableNum.forEach(el => {
    el.addEventListener('click', () => {
        let currentNum = el.innerHTML;
        el.innerHTML = currentNum ** 2;
    });
});

// 4 Задание

let table = document.getElementById('table');
let selectedTd;

table.onclick = function(event) {
    let target = event.target;

    while (target != this) {
        if (target.tagName == 'TD') {
            hig(target);
            return;
        }
        target = target.parentNode;
    }
}

function hig(node) {
    if (selectedTd) {
        selectedTd.classList.remove('light');
    }
    selectedTd = node;
    selectedTd.classList.add('light');
}


// 7 Задание

const deleteFunc = el => {
    let btn = el;
    btn.remove();
}
