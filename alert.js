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
console.log("Hello");