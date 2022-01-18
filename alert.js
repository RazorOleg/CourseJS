//Different
//Proxy & Reflect
let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return target[prop];
            } else {
                throw new ReferenceError(`Свойство не существует: "${prop}"`)
            }
        }
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age);


let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[-1]);
console.log(array[-2]);



let handlers = Symbol('handlers');

function makeObservable(target) {
    // 1. Создадим хранилище обработчиков
    target[handlers] = [];

    // положим туда функции-обработчики для вызовов в будущем
    target.observe = function(handler) {
        this[handlers].push(handler);
    };

    // 2. Создадим прокси для реакции на изменения
    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
            if (success) { // если не произошло ошибки при записи свойства
                // вызовем обработчики
                target[handlers].forEach(handler => handler(property, value));
            }
            return success;
        }
    });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});

user.name = "John";

//Eval
let calc = prompt("Калькулятор:");
alert(eval(calc));

//Bit operation
function isInteger(num){
    return (num^0) === num;
}

alert( isInteger(1) );
alert( isInteger(1.5) );
alert( isInteger(-0.5) );

//Intl
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function (a, b) {
    return collator.compare(a, b);
});

alert(animals);