class Employee {
    constructor(name, age, salaryPerHour, hours) {
        this.name = name;
        this.age = age;
        this.salaryPerHour = salaryPerHour;
        this.hours = hours;
    }
    getSalary() {
        return `${this.name}'salary' ${this.salaryPerHour * this.hours}`;
    }
}
const firstEmployee = new Employee('John', 18, 25, 6);  // создание экзэмпляра класса.
const secondEmployee = new Employee('Alex', 22, 33, 5);

console.log(firstEmployee.getSalary())
console.log(secondEmployee.getSalary())


// 2 Задание


class EmployeeTwo {
    #name;
    #age;
    #salaryPerHour;
    #hours;
    constructor(name, age, salaryPerHour, hours) {
        this.#name = name;
        this.#age = age;
        this.#salaryPerHour = salaryPerHour;
        this.#hours = hours;
    }

    set name(newName) {return this.#name = newName;}
    set age(newAge) {return this.#age = newAge;}
    set salaryPerHour(newSalaryPerHour) {return this.#salaryPerHour = newSalaryPerHour;}
    set hours(newHours) {return this.#hours = newHours;}

    get name() {return this.#name;}
    get age() {return this.#age;}
    get salaryPerHour() {return this.#salaryPerHour;}
    get hours() {return this.#hours;}
    get salary() {
        return `return ${this.name}'salary' ${this.salaryPerHour * this.hours};`
    }

}

const person = new EmployeeTwo('Boris', 45, 40, 8);
console.log(person.salary)


// 3 Задание


class ValidNum {
    constructor(num) {
        this.number = num;
    }

    even() {
        return this.number % 2 === 0 ? true : false;
    }
    isInt() {
        return this.number % 1 === 0;
    }
    isFloat() {
        return this.number % 1 !== 0;
    }
    isPositive() {
        return this.number > 0;
    }
    isNegative() {
        return this.number < 0;
    }
}

const x = new ValidNum(5);
const y = new ValidNum(6);



// 4 Задание


class MyString {
    constructor(str) {
        this.string = str;
    }

    capitalize() {
        const splitStr = this.string.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return this.string = splitStr.join(' ');
    }

    lowercase() {
        const splitStr = this.string.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
        }
        return this.string = splitStr.join(' ');
    }

    symbols() {
        const splitStr = this.string.split(' ');
        let allSymbls = 0
        for (let el of splitStr) {
            let symbols = el.length;
            allSymbls += symbols;
        }
        return allSymbls;
    }
}


const str = new MyString('my new string');


// 5 Задание


class AccountingEmployee extends Employee {
    work() {
        console.log("Yeah, I'm doing my job");
    }
}

const accEmloyee = new AccountingEmployee('Dora', 30, 30, 6);
console.log(accEmloyee.work());

// 6 Задание


class DOMElement {
    constructor(selector) {
        this.selector = selector
    }

    nodeText(text) {
        return document.querySelector(`${this.selector}`).innerText = text;
    }
    nodeHtml(html){
        return document.querySelector(`${this.selector}`).innerHTML = html;
    }
    addNode(tag){
        return document.querySelector(`${this.selector}`).appendChild(document.createElement(tag))
    }
    addEndStr(str){
        const string = document.createTextNode(str);
        return document.querySelector(`${this.selector}`).appendChild(string);
    }
    addBegStr(str){
        const string = document.createTextNode(str);
        return document.querySelector(`${this.selector}`).prepend(string);
    }
    changeAttr(attr, text){
        return document.querySelector(`${this.selector}`).setAttribute(attr, text)
    }
    child(){
        return document.querySelector(`${this.selector}`).firstElementChild;
    }
    del(){
        return document.querySelector(`${this.selector}`).remove();
    }
}

const element = new DOMElement('.container');