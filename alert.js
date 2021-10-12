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

function ucFirst(str) {
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
}
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

function camelize(str) {

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
alert(camelize("-webkit-transition"));


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


function filterRange(arr, a, b) {
   return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 2, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);



