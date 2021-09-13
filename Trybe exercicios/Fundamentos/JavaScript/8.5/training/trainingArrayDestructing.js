const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const hi = [firstSaudação, secondSaudação] = saudacoes;
console.log(`${hi[0]}`)




// 2 -
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const variaveis = [...comida, ...animal, ...bebida]

const resolve = [comida = variaveis[2], animal = variaveis[0], be ]
console.log(comida, animal, bebida)


