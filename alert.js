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