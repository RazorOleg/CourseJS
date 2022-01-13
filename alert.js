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