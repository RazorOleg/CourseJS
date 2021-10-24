
function sumTo(n) {
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

printReverseList1(list);