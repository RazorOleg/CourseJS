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