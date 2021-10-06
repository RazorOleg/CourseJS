alert('Я JavaScript');
/*
//1.1-2.13
/!*let admin;
let name;

name = "Джон";

admin = name;
alert(`Имя: ${admin}`);

let newName = "Oleg";

alert( `hello ${1}` );

alert( `hello ${"newName"}` );

alert( `hello ${newName}` );*!/

let userName = prompt("Как Вас зовут?", 'Имя');
alert(`Ваше имя: ${userName}`);

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12
*/

/*let message = prompt("Какое «официальное» название JavaScript?", "");
message== "ECMAScript" ? alert("Correct"): alert("Не знаете? ECMAScript!");

let result = prompt("Введите число", "");
if (result>0)
{
    alert('1');
}
else if (result<0)
{
    alert('-1');
}
else if (result==0)
{
    alert('0');
}

let a =1;
let b =1;
let res = (a + b < 4) ? 'Мало': 'Много';
alert(res);

let login = prompt("Введите значения:", "");
let mes = (login == 'Сотрудник') ? 'Привет' :
                (login == 'Директор') ? 'Директор' :
                       (login == '') ? 'Нет логина' : '';*/
/*alert(mes);*/

/*let age = 12;
if(age <=14 || age >=90)
{
    alert("Переменная age не находится в диапазоне от 14 до 90");
}

let login = prompt("Кто там?", "");
if (login=="Админ")
{
    parol = prompt("Пароль?", "Введите пароль");
    if(parol == "Я главный")
    {
        alert("Здравствуйте!");
    }
    else if(parol == null || parol == "")
    {
        alert("Отменено");
    }
    else
    {
        alert("Неверный пароль");
    }
}
else if(login == null || login == "")
{
    alert("Отменено");
}
else
{
    alert("Я вас не знаю");
}
let i = 0;
/!*for (i = 2; i <= 10; i++ )
{
    if (!(i % 2))
    {
        alert(i);
    }
}*!/

while (i < 3)
{
    alert( `number ${i}!`);
    i++;
}*/

/*for (i = 0; i < 100; i++)
{
    let condition = prompt("Введите число больше 100", "");
    if (condition > 100 || condition == null || condition == "") break;
}*/

/*let n = prompt("Введите значения интервала: от 2 до ", 10)
for (i = 2; i < n; i++)
{
    if((i>1) && (i % (1 || i) == 0) && !(i % 3 == 0)) alert(i);
}*/

/*let browser = prompt("Please, input the name of browser: ", "");
if(browser == "Edge")
{
    alert("You've got the Edge!" );
}
else if(browser == "Chrome" ||
        browser == "Firefox"||
        browser == "Safari" ||
        browser == "Opera")
{
    alert("Okey, we support these browsers too");
}
else
{
    alert("We hope that this page looks ok! ");
}

const number = +prompt('Введите число между 0 и 3', '');
switch(number)
{
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert("Вы ввели число 1");
        break;
    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
        break;
    default:
        alert("Число не входит в диапазон");
}

let age = prompt("Put your age: ", "18");
function checkAge(age)
{
    return (age > 18) ? true: confirm("Родители разрешили? ");

}
checkAge(age);

let age1 = prompt("Put your age: ", "18");
function checkAge1(age1)
{
    return (age1 > 18) || confirm("Родители разрешили? ");

}
checkAge1(age1);

let a = prompt("Введите значения a: ", "0");
let b = prompt("Введите значения b: ", "0");
function min(a, b)
{
    return (a > b) ? alert(b): alert(a);
}
min(a,b);*/

//3.1-3.6
/*let x = prompt("Введите значения x: ", "0");
let n = prompt("Введите значения n: ", "0");
function pow(x, n) {
    let res = Math.pow(x, n);
    alert(res);
}

pow(x, n);

let res = confirm("Вы согласны?") ? () => alert("Вы согласились."): () => alert("Вы отменили выполнение.");
res();

function pow(x,n) {
    let result = 1;

    for ( let i = 0; i < n; i++) {

        result*=x;
    }

    return result;
}

let x = prompt("x?",'');
let n=prompt("n?",'');

if (n<=0) {
    alert(`Степень ${n} не поддерживается,
           введите целую степень, большую 0`);
} else {
    alert(pow(x, n));
}*/

/*let user = {
    name: "John",
    surname: "Smith"
};

alert(user.name);

user.name = "Pete";

alert(user.name);

delete user.name;

let schedule = {};


function isEmpty(obj) {

    for (let key in obj)
    {
        return false;
    }
    return true;
}

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function isSalaries(obj)
{
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

alert(isSalaries(salaries));*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {

    let key;
    for (key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] = 2 * obj[key];
        }
    }
}

multiplyNumeric(menu);

console.log(menu);

