var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el texto: ", function (answer) {
    main(answer);
    rl.close();
});

function main(input) {

    const num = Number(input);

    if (isNaN(num)) {
        const result = goodArray(input);
        process.stdout.write(result);
    }
}

function goodArray(input) {

    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            result += input[i];
        }
    }

    return result;
}
