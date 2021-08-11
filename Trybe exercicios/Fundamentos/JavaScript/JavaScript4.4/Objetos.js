
let player = {
 name : 'Marta',
 lastName :'Silva',
 age : 34,
 medals : { golden: 2, silver: 3 },
 bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + "tem" + ' ' + player.age + ' ' + "anos de idade")

output : 'A jogadora Marta Silva tem 34 anos de idade'

console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + "foi eleita a melhor do mundo por 6 vezes:" + ' ' + player.bestInTheWorld)

console.log('A jogadora possui' + ' ' + player.medals.golden + ' ' + 'medalhas de ouro e' + ' ' + player.medals.silver + ' ' + 'medalhas de prata')

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let key in names) {
      console.log('olá'+' '+ names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
      console.log(key, car[key])
  }

  // 1 - Imprima no console uma mensagem de boas-vindas para a personagem abaixo, incluindo seu nome. Valor esperado no console:
  function Person(){
    console.log('Bem-vinda,'+' '+ info.personagem)
  }
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }
  


// 2 Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
 
  info.recorrente = "Sim"
  console.log(info.recorrente)


// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// Copiar

for (let key in info){
console.log(key)
    }

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:   

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
info.recorrente = "Sim"
// for (let key in info) {
//  console.log(info[key])
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
info.recorrente = "Sim"
// for (let key in info) {
//  console.log(info[key])
// }

let PatinhasInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

console.log(info.personagem + " " + "e" + " "+ PatinhasInfo.personagem + "\n" + info.origem + " " + "e" + " " + PatinhasInfo.origem + "\n" + info.nota + " " + "e" + " " + PatinhasInfo.nota + "\n" + info.recorrente + " " + "e" + " " + PatinhasInfo.recorrente)

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function VerificaPalindromo(string) {
  resultj = ''
  resulti = ''
  let transform = [...string]
  for (let i = 0; i <= transform.length -1; i ++){
 resulti = transform[i]
  }
  for (let j = transform.length -1; j >= 0; j--){
     resultj = transform[j]
  }
  if (resulti === resultj){
  console.log(true)
  } else {
    console.log(false)
  
}
}

VerificaPalindromo('')

// 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function  Major (numbers){

let soma = [];


for (let i = 0; i !== soma ; i++) {

      soma.push(Math.max(...numbers))
    }

    console.log(soma);


  }

  Major([5, 8 ,8 , 6, 5, 5, 90, 91,60])