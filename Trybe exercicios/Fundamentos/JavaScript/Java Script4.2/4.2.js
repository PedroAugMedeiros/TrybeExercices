// 1 Nesse primeiro exercício, percorra o numbers imprimindo todos os valores nele contidos com a função console.log() ;

Algoritimo : 

// 1 Adicionar o Array

// 2 Criar uma estrutura de repetição para percorrer o Array

// 3 Imprimir o os valores do array


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
    
}
//Output
5
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
 
Algoritimo:

// 1 Adicionar o Array

// 2 Criar uma variavel para armazenar o resultado da soma de todos elementos do Array

// 3 Criar uma estrutura de repetição para percorrer o Array 

// 4 Incrementar a variavel com o valor contido em cada loop de repetição

// 5 Imprimir o valor dessa variavel

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

Algoritimo:

// 1 Adicionar o Array

// 2 Criar uma variavel para armazenar o resultado da soma de todos elementos do Array

// 3 Criar uma estrutura de repetição para percorrer o Array 

// 4 Incrementar a variavel com o valor contido em cada loop de repetição

// 5 Criar variavel para dividir o resultado da soma pelo tamanho do array

// 6 Imprimir o valor dessa variavel


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

Algoritimo:

// 1 Cria um if com a condição : ser maior que 20

// 2 Caso seja imprimir:

"Valor maior que 20"

// 3 Caso não seja imprimir:

"Valor menor ou igua a 20"



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

Algoritimo:
// 1 Adicionar Array numbers

// 2 Criar variavel para armazenar array

// 3 Criar for para Percorrer o array 

// 4 Empurrar resultado do index do for para a variavel soma

// 5 Criar variavel max para armazenar o maior numero

// 6 Atribuir o valor de max ao maior numero do array contido em soma usando o Math.max(...soma)

// 7 imprimir o valor de max que contera o maior numero do array

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

Algoritimo:

// 1 Adicionar array numbers

// 2 Criar variavel para armazenar o array

// 3 Criar variavel para armazenar quantidade de numeros impares

// 4 Criar for para percorrer o array

// 5 Atribuir o push para empurrar o resultado do for para a variavel que armazena o array

// 6 Criar for para percorrer a variavel que contem o array 

// 7 Usar if com a condição de que se o resto da divisão do resultado do for dividio por 2 for diferente de zero 
// adicionar 1 unidade na variavel quantidade

// 8 Imprimir variavel quantidade




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

Algoritimo:
// 1 Adicionar Array numbers

// 2 Criar variavel para armazenar array

// 3 Criar for para Percorrer o array 

// 4 Empurrar resultado do index do for para a variavel soma

// 5 Criar variavel min para armazenar o min numero

// 6 Atribuir o valor de min ao menor numero do array contido em soma usando o Math.min(...soma)

// 7 imprimir o valor de min que contera o menor numero do array









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

 Algoritimo:

//  1 Criar um for 

//  2 Atribuir a condição de termino do loop á :
//  quando o o valor do loop for menor que 26 

//  3 Imprimir valor do loop

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

Algoritimo:

// 1 Criar variavel soma para conter o resultado de cada loop dividido por 2

// 2 Empurrar para soma o resultado de cada loop dividido por 2 com o .push

// 3 Imprimir valor de soma

soma = [ ] 
for (let i = 1; i < 26; i++) {

    soma.push(i / 2)
     }

     console.log(soma)

 