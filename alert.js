alert('Я JavaScript');

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

class Soldier {
    constructor(value) {
        this.value = value;
        }
    Shoot() {
        return "выстрел";
    }
    Heal() {
        return "лечение";
    }
    Run() {
        return "побег";
    }

    get condition() {
        if(this.value === "солдат здоров") {
            return this.Shoot();
        } else if(this.value === "солдат ранен") {
            return this.Heal();
        } else if(this.value === "солдат проигрывает") {
            return this.Run();
        } else {
            return;
        }
    }
}

let value = prompt("Введите значения:", "солдат здоров");
let res = new Soldier(value);
console.log(res.condition);