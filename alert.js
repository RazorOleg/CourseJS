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