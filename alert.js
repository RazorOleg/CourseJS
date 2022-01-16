//8.1-8.4 Prototype & Inheritance
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("orange");
alert( speedy.stomach ); // apple

lazy.eat("orange");
alert( lazy.stomach );


/*function Rabbit(name) {
    this.name = name;
    alert(name);
}
let obj = new Rabbit("White Rabbit");
let obj2 = new obj.constructor("Black Rabbit");*/

function Rabbit(name) {
    this.name = name;
    alert(name);
}
Rabbit.prototype = { };

let obj = new Rabbit("White Rabbit");

let obj2 = new obj.constructor("Black Rabbit");

alert(obj2.name);


/*Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}
function f() {
    alert("Hello!");
}
f.defer(1000);*/


Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);


let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
    alert(key);
}

alert(dictionary);


//9.1
class Clock {

    constructor({template}) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render, 1000);
    }
}
//9.2
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);
class ExtendedClock extends Clock {
    constructor(props) {
        super(props);
        let { precision=1000 } = props;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render, this.precision)
    }
}
let extendsClock = new ExtendedClock({template: 'h:m:s'});
extendsClock.start();

//9.3-9.7
class Rabbit2 extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit2 = new Rabbit2("Кроль");

alert( rabbit2.hasOwnProperty('name') );
alert( rabbit2.hasOwnProperty('name') );

//10.1-10.2
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError );

//11.1-11.4
function delay(ms) {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done"), ms);
    });
    return promise;
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

console.log("Start");

function hello() {
    console.log("Hello");
}

setTimeout(hello, 0);

hello();

console.log("End");


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

promise.catch(alert);

//11.5-11.8
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson1(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {

    let user;
    while (true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson1(`https://api.github.com/users/${name}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
    alert(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f(){
    wait().then(alert);
}

f();

//12.1-12.2
function* pseudoRandom(seed) {
    let result = seed;
    while(true) {
        yield result = result * 16807 % 2147483647;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);