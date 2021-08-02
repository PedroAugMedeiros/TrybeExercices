
// array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let i = 0; i < fruits.length; i++) {
    soma += fruits[i];
    
}

if (soma > 15){
    console.log(soma)
} else {
    console.log("valor menor que 16")
}

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n  = 5;
for (let index = 1; index <= n; index++) {
   console.log("*" .repeat(n))
    
}

// 2 Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


let n = 10;
for (let i = 0;  i <= n; i++ ){
    let padrao = "";
    for (let index = 0; index < i; index++){
        padrao += "*";
    }
console.log(padrao);
}

//3 Agora inverta o lado do triângulo. Por exemplo:



4 
let n = 5; 
let string = ""; //Declarando variável .
for(let i = 1; i <= n; i++){ //Declarando um contador menor igual a n.
    for(let g = 1; g <= n - i; g++){ //Declarando um contador que será menor igual à n menos o i, que na primeira rodada do loop, será 2, que resultará em 3.
    string += " "; //Adicionando espaço na string, 3 espaços.
}
    for(let p = 0; p < 2 * i - 1; p++) { //Aqui, estou adicionando um crescimento dinâmico ao p, pois conforme o i cresce, p crescerá junto. O -1 está para garantir que sempre será um valor ímpar começado pelo 1, pois o i começa valendo 2 na primeira rodada do loop.
        string += "*" //Adicionando o asterisco.
    }
    string += "\n" //Pulando para a linha de baixo para recomeçar o loop.
}
console.log(string) //Imprimindo a string. 
