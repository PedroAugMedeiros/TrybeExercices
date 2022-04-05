"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
//Exibe a string passada como parametro
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
//Exibe a string passada no primeiro parametro seguida do numero passado no segundo paramettro
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
//Exibe a soma dos numeros da const numbArray
function sumArray() {
    const numbArray = [5, 9, 10];
    function add(x, y) {
        return x + y;
    }
    function reduceArray(numbers) {
        return numbers.reduce(add, 0);
    }
    return reduceArray(numbArray);
}
exports.sumArray = sumArray;
//Calcula a area de um triangulo
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
//Calcula a area de um quadradro
function square(side) {
    return side ** 2;
}
exports.square = square;
//Calcula a area de um retangulo
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
//Calcula a area de um losango
function losangle(D, d) {
    return (D * d) / 2;
}
exports.losangle = losangle;
