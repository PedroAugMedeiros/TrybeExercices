// 1 Nesse primeiro exercício, percorra o numbers imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
    
}
//Output
9
3
19
70
8
100
2
35
27

// 2 Para o segundo exercício, some todos os valores contidos no numbers e imprima o resultado;
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma)

//Output
278


// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no numbers;
// . A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma = numbers[i];
}
let mediaAritimetica = (soma / [numbers.length])
console.log(mediaAritimetica)

//Output

27.8

// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
let mediaAritimetica = (soma / [numbers.length])

if (mediaAritimetica > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

//Output

"valor maior que 20"

// 5 Utilizando for , descubra qual o maior valor contido no numbers e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = [];


for (let i = 0; i < numbers.length; i++) {

      soma.push(numbers[i])
    }

    let max = Math.max(...soma);
   
    console.log(max);

    //Output

    100
  
// 6 Descubra quantos valores ímpares existem no numbers e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = [];
let quantidade = 0;
for (let i = 0; i < numbers.length; i++) {

soma.push(numbers[i])

}
for (let index = 0; index < soma.length; index++) {
  if (soma[index] % 2 !== 0){
      quantidade ++
  } 
}

console.log(quantidade)

//Output 

6


// 7 Utilizando for , descubra qual o menor valor contido no numbers e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = [];


for (let i = 0; i < numbers.length; i++) {

      soma.push(numbers[i])
    }

    let min = Math.min(...soma);
   
    console.log(min);

    //Output

    2


// 8 Utilizando for , crie um numbers que vá de 1 até 25 e imprima o resultado;

for (let i = 1; i < 26; i++) {

 console.log(i)
  }

 // Output
 
 1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25

// 9 Utilizando o numbers criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
soma = [ ] 
for (let i = 1; i < 26; i++) {

    soma.push(i / 2)
     }

     console.log(soma)

 