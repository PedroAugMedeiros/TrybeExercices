interface Fligth {
    numberOfPassengers: number,
    numberOfRooms: number,
    size: string,
    color: string,
}


enum ColorFligth {
    Black = "Preta",
    Blue = "Azul",
    Green = "Verde",
    Pink = "Rosa",
}


enum SizeFligth {
    Small = "pequeno",
    Medium = "medio",
    Big = "grande",
    VeryBig = "muito grande"
}


class Fligth {

    constructor(numberOfPassengers: number, numberOfRooms: number, color: ColorFligth, size: SizeFligth) {
        this.numberOfPassengers = numberOfPassengers;
        this.numberOfRooms =  numberOfRooms;
        this.color = color;
        this.size = size;
    }

    describeFligth(): void {
        console.log(`my Fligth have ${this.numberOfPassengers} residents and ${this.numberOfRooms} rooms, your color is ${this.color} and  your size is ${this.size}`);
    }

}

const Fligth1 = new Fligth(4, 3, ColorFligth.Pink, SizeFligth.VeryBig);

Fligth1.describeFligth()