// ./exercises.ts


//Exibe a string passada como parametro
export function greeter(name: string) {
    return `Olá ${name}!`;
}

//Exibe a string passada no primeiro parametro seguida do numero passado no segundo paramettro
export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}



//Exibe a soma dos numeros da const numbArray
export function sumArray() {

    const numbArray = [5, 9, 10];

    function add(x: number, y: number): number {
        return x + y;
    }

    function reduceArray(numbers: number[]): number {
        return numbers.reduce(add, 0);
    }

    return reduceArray(numbArray)

}


//Calcula a area de um triangulo
export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}


//Calcula a area de um quadradro
export function square(side: number): number {
    return side ** 2;
}

//Calcula a area de um retangulo
export function rectangle(base: number, height: number): number {
    return base * height;
}

//Calcula a area de um losango
export function losangle(D: number, d: number): number {
    return (D * d) / 2;
}

//Calcula a area de um trapézio
export function trapeze(B: number, b: number, h: number): number {
    return ((B + b) * h) / 2;
}


//Type alias

type Aliases = {
    x: string;
};

//Crie um type para um objeto que represente um pássaro.
//Solução

type Bird = {
    wings: 2;
    beaks: 1;
    biped: true;
}

//Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
//Solução

type Sum = (x: number, y: number) => number;

//Crie um type para um objeto que represente um endereço.
//Solução

type Address = {
    publicPlace: string;
    number: number;
    district: string;
    city: string;
    state: string;
}

//Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
//Solução

type StatesOfMatter = "liquid" | "solid" | "gaseous";

//Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type CPF = string | number;

//Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type operacionalSistems = "Linux" | "mac" | "windows";

//Crie um type union que represente as vogais do alfabeto.

type vogals = "a" | "e" | "i" | "o" | "u";



//Classes 

//Crie uma classe cujo objeto represente um Cachorro.


interface Dog {
    name: string,
    color: string,
    size: string,
}


enum Color {
    Black = "Preto",
    Blue = "Azul",
    Green = "Verde",
    Brown = "Castanho",
}


enum Size {
    Small = "pequeno",
    Medium = "Azul",
    Big = "Verde",
}


class Dog {

    constructor(name: string, color: Color, size: Size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }

    speak(): void {
        console.log(`the ${this.color} and ${this.size} dog ${this.name} is talking.`);
    }

}

const dog1 = new Dog("Rex", Color.Black, Size.Small);

dog1.speak()

//Crie uma classe cujo objeto represente uma Casa.

interface House {
    numberOfresidents: number,
    numberOfRooms: number,
    size: string,
    color: string,
}


enum ColorHouse {
    Black = "Preta",
    Blue = "Azul",
    Green = "Verde",
    Pink = "Rosa",
}


enum SizeHouse {
    Small = "pequeno",
    Medium = "medio",
    Big = "grande",
    VeryBig = "muito grande"
}



