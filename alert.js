alert('Я JavaScript');

/*
let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите второе число: ");

let sum = num1 + num2;
console.log(+sum.toFixed(2));


alert( (Math.round(6.35 * 10) / 10) );

/!*let readNumber = () => {
    let num = +prompt("Введите число", 0);
    if ( !isFinite(num) ) {
        readNumber();
    }
    return num;

}
readNumber();*!/


function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Число: ${readNumber()}`);


function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

alert( randomInteger(1, 3) );
alert( randomInteger(1, 4) );
alert( randomInteger(1, 5) );
*/

/*function ucFirst(str) {
    if (!str) return str;

    let firstSymbol = str[0].toUpperCase();
    return firstSymbol + str.slice(1, 4);

}

alert(ucFirst("вася"));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}*/
/*
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxLength) {
    if(str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "...";
    } else {
        return str;
    }

}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120'));
console.log(typeof(extractCurrencyValue('$120')));*/

/*let styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-рол");

console.log(styles);

let index = Math.floor((styles.length - 1) / 2);
styles[index] = "Класика";

console.log(styles);

alert(styles.shift());

console.log(styles);

styles.unshift("Рэп", "Регги");

console.log(styles);

let sumInput = () => {
    let value;
    let arr = [];
    while(true) {

        value = prompt("Введите значения: ");

        if (value === "" || value === null || !isFinite(value)) break;

        arr.push(+value);

    }

    let sum = 0;
    for(value of arr) {
        sum += value;
    }
    return sum;
}

alert(sumInput());*/


/*function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число", 0);

        // Прекращаем ввод?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );*/

/*
let arr = [1, -2, 3, 4, 5, -3];

function getMaxSubSum() {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    alert(maxSum);
}
getMaxSubSum();*/

/*function camelize(str) {

    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
        let firstSymbol = arr[i].toUpperCase().slice(0, 1);
        arr[i] = firstSymbol + arr[i].slice(1);
        console.log(firstSymbol);
    }

    let newStr = arr.join("");
    return newStr;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));*/


/*
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}*/


/*function filterRange(arr, a, b) {
   return arr.filter(item => (a <= item && item <= b));
}
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);*/


/*function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if( a > arr[i] || arr[i] > b) {
            console.log(arr.splice(i, 1));
            i--;
        }
    }
    console.log(arr);
}

let arr = [5, 3, 2, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

let arr1 = [5, 2, 1, -10, 8];
function compare(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}
arr1.sort(compare);
alert(arr1);

function copySorted(arr) {
    return arr.concat().sort();
}
let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

alert( sorted );
alert( arr2 );


function Calculator() {
    this.calculate = function (str) {
        this.arr = str.split(" ");
        this.res = 0;

        if (str.includes('+')) {
            this.res += +this.arr[0] + +this.arr[2];
        } else if (str.includes('-')) {
            this.res = +this.arr[0] - +this.arr[2];
        } else if (str.includes('*')) {
            this.res = +this.arr[0] * +this.arr[2];
        } else if (str.includes('/')) {
            this.res = +this.arr[0] / +this.arr[2];
        } else if (str.includes('**')) {
            this.res = this.arr[0] ** this.arr[2];
        } else {
            return;
        }
        return this.res;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") );
console.log( calc.calculate("3 + 7") );
console.log( calc.calculate("3 * 7") );
console.log( calc.calculate("3 / 7") );
console.log( calc.calculate("3 ** 4") );*/


/*
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8*/

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names );*/


/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];


let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин*/


/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr3 = [ vasya, petya, masha ];

sortByAge(arr3);

// теперь: [vasya, masha, petya]
alert(arr3[0].name); // Вася
alert(arr3[1].name); // Маша
alert(arr3[2].name); // Петя

function sortByAge(users) {
    let arr = users;
    console.log(arr);
    this.compare = function (a, b) {
        if (a.age > b.age) return 1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return -1;
    }
    arr.sort(this.compare);
}*/



/*
function unique(arr) {

    return Array.from(new Set(arr));
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);*/

/*function sumSalaries(obj) {
    let sum = 0;
    for(let value of Object.values(obj)) {
        sum +=value;
    }
    return sum;

}*/

/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
*/

/*alert( sumSalaries(salaries) );


function count(obj) {
    let count = 0;
    for(let value of Object.keys(obj)) {
         count++;
    }
    return count
}*/
}

/*function count(obj) {
    return Object.keys(obj).length;
}*/

/*let user = {
    name: 'John',
    age: 30
};

alert( count(user) );

let {name, years: age, isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin );*/

/*let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {
    let top = 0;
    let topName = null;

    for(const [name, salary] of Object.entries(obj)) {
       if (top < salary) {
           top = salary;
           topName = name;
       }
    }
    return topName;

}
alert(topSalary(salaries));*/

let date = new Date(2021, 1, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    if(date.getDay() === 0) {
        return "ВС";
    } else if (date.getDay() === 1) {
        return "ПН";
    } else if (date.getDay() === 2) {
        return "ВТ";
    } else if (date.getDay() === 3) {
        return "СР";
    } else if (date.getDay() === 4) {
        return "ЧТ";
    } else if (date.getDay() === 5) {
        return "ПТ";
    } else if (date.getDay() === 6) {
        return "СБ";
    }
}

let date1 = new Date(2012, 0, 3);
alert( getWeekDay(date1) );

function getLocalDay(date) {
    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    return day;
}
let date2 = new Date(2012, 0, 3);
alert( getLocalDay(date2) );

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date3 = new Date(2015, 0, 2);
alert( getDateAgo(date3, 1) );
alert( getDateAgo(date3, 2) );
alert( getDateAgo(date3, 365) );

function getLastDayOfMonth(year, month) {
    let dateCopy = new Date(year, month);

    dateCopy.setDate(0);
    return dateCopy.getDate();
}

alert( getLastDayOfMonth(2012, 2) );

function getSecondToday() {
    let now = new Date();
    console.log(now);
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log(today);
    let res = now - today;
    return Math.round(res / 1000);
}

alert( getSecondToday() );

function getSecondTomorrow() {
    let today = new Date();
    console.log(today);
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    console.log(tomorrow);
    let res = tomorrow - today;
    return Math.round(res / 1000);
}

alert( getSecondTomorrow() );

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) );


let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
console.log(json);

json = JSON.parse(json);
console.log(json.name);
console.log(json.age);


let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};


room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));