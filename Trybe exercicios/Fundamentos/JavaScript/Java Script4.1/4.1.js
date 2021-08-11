/*EXERCICIO 1
  
Selocione o Codigo e clique no Play o Resultado aparecera no seu Output
Calculadora de Adição*/                                                              

function sum(a, b) {
console.log(a + b)

}
sum(7, 7)

// Calculadora de Subtração
function sum(a, b) {
    console.log(a - b)
    
    }
    sum(7, 7)

// Calculadora de Multiplicação
function sum(a, b) {
    console.log(a * b)
    
    }
    sum(7, 7)

// Calculadora de Divisão
function sum(a, b) {
    console.log(a / b)
    
    }
    sum(7, 7)

// Calculadora de Resto de Divisão
function sum(a, b) {
    console.log(a % b)
    
    }
    sum(7, 7)
       

/* EXERCICIO 2 
Registra o maior entre 2 numeros*/


function Major(a, b){

if (a > b) {
console.log("a") 
}
else if (a < b){
console.log("b")
}
}
Major (10, 100)
/* EXERCICIO 3 
Registra o maior entre 3 numeros*/
function Major (a, b, c){

if (a > b && a > c) {
    console.log("a")
} else if (b > a && b > c){
    console.log("b")
} else if (c > a && c > b){
    console.log("c")
}else {
    console.log("são iguais")
}
}
Major (9, 8, 10)
/* EXERCICIO 4 
programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

function Numb (number){
if (number > 0) {
    console.log("postive")
}
else if (number < 0) {
    console.log("negative")
} else {
    console.log("zero")
}
}
Numb(-1)
/* EXERCICIO 5
 programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/
 
function Angle (angulo1, angulo2, angulo3, sum){


 if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
 console.log("error, this not is a valid angle")
 }
else if (sum === 180) {
 console.log("true")
} else {
    console.log("false")
}
}

Angle(40, 100, 40, 40+100+40)


/* EXERCICIO 6
programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
let rei = "Anda uma casa por jogada pra qualquer direção; Não passa por cima de outras peças; "
let dama = "Anda quantas casas quiser por jogada para qualquer direção; Não passa por cima de outras peças; "
let bispo =  "Anda quantas casas quiser por jogada e apenas na direção diagonal; Não passa por cima de outras peças;"
let cavalo = "Anda sempre duas casas para frente e uma pro lado formando um L pra qualquer direção;  Passa por cima de outras peças; "
let torre = "Anda quantas casas quiser por jogada apenas na direção horizontal ou vertical; Não passa por cima de outras peças; "
let peão = "Cada peão pode andar duas casas para frente na sua primeira jogada, e uma casa pra frente nas demais;   Não passa por cima de outras peças;"


let peça = "rei"

switch (peça) {
case "rei": 
    console.log(rei)

     break;

    case "dama":    
        console.log(dama)
break
case "torre":
console.log(torre)
break

case "peão":
    console.log(peão)

    case "bispo":
    console.log(bispo)

    case "cavalo":

    console.log(cavalo)

    default: 
        console.log("insira uma peça do xadrez: dama, rei, peão, torre, bispo, cavalo")
        break;
}

//EXERCICIO 7 programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
    
let notaPorcentagem = 56;
let notaLetter; 