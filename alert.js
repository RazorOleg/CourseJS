
/*function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++ ) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(4));

function sumTo1(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}

console.log(sumTo1(100));

function sumTo2(n) {
    let sum = 0;
    sum = ((2 + ( n-1 ))/2) * n;
    return sum;
}

console.log(sumTo2(4));

function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(3));

function fib(n) {
    if (n == 1 || n ==2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let newList = list;

    while (newList) {
        console.log(newList.value);
        newList = newList.next;
    }
}

printList(list);

function printList1(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

printList1(list);


function printReverseList(list) {
    let newList = list;
    let arr = [];

    while (newList) {
        arr.push(newList.value);
        newList = newList.next;
    }

    for (let i = arr.length - 1; i >= 0; i-- ) {
        console.log(arr[i])
    }

}

printReverseList(list);

function printReverseList1(list) {

    if (list.next) {
        printReverseList1(list.next);
    }

    console.log(list.value);
}

printReverseList1(list);*/


/*
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name));

users.sort(byField('age'));
users.forEach(user => alert(user.age));

function makeArmy() {
    let shooters = [];


    for(let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;

}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)


function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    }
    return f;
}

alert(sum(1)(2));
alert(sum(2)(3)(4));
*/

function printNumbers3(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers3(5, 10);


function printNumbers4(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers4(5, 10);


function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


/*function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");*/

function debounce(f, ms) {
    let isCoolDown = false;

    return function() {
        if (isCoolDown) return;

        f.apply(this, arguments);

        isCoolDown = true;

        setTimeout(() => isCoolDown = false, ms);
    };
}

let f1 = debounce(alert, 1000);
f1(1);
f1(2);


function f(a) {
    console.log(a)
}

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);



function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }

};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
