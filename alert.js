alert('Я JavaScript');

/*function clone(object) {
    let newObject = {}

    for(let prop in object) {
        newObject[prop] = (typeof object[prop] !== 'object') ? object[prop] : clone(object[prop])
    }
    return newObject
}

let calculator = {
    read() {
        this.val1 = +prompt("Введите первое значение: ");
        this.val2 = +prompt("Введите второе значение: ");
    },
    sum() {
        let sum = this.val1 + this.val2;
        return sum;

    },

    mul() {
        let mul = this.val1 * this.val2;
        return mul;

    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep();*/

/*let obj = {};

function A() {return obj; }

function B() {return obj; }

let a = new A;
let b = new B;

alert( a == b );*/

/*function Calculator() {
    this.read = function () {
        this.val1 = +prompt("Введите первое значение: ");
        this.val2 = +prompt("Введите второе значение: ");
    },
    this.sum = function () {
        let sum = this.val1 + this.val2;
        return sum;

    },

    this.mul = function () {
        let mul = this.val1 * this.val2;
        return mul;
    }

}*/

/*let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.number = +prompt("Введите число: ");
        this.value += this.number;
        console.log(this.value);
    }
}

let accumulator = new Accumulator(1);

accumulator.read();

accumulator.read();

alert(accumulator.value);