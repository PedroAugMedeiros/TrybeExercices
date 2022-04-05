class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

class Tv {
  private brand: string;
  private size: number;
  private resolution: number;
  private connections: string[];
  private _connectedTo: string;

    constructor(b: string, s: number, r: number, c: string[], ct: string ) {
      console.log(`Criando tv da marca: ${b}`);
      this.brand = b;
      this.size = s;
      this.resolution = r;
      this.connections = c;
      this._connectedTo = ct;
    }
  
    turnOn() {
      console.log(`${this.brand} ${this.size} ${this.resolution} ${this.connections} ${this.connectedTo}`);
    }

    get connectedTo() {
        return this._connectedTo
    }

    set connectedTo(nowConnection: string) {
        this._connectedTo = nowConnection
    }

  }
  
  const tv1 = new Tv('Philco', 171, 58, ['HDMI', 'ETHERNET'], 'ETHERNET');
  const tv2 = new Tv('Sansung', 175, 66, ['HDMI', 'ETHERNET'], 'ETHERNET');

  tv1.turnOn()
  tv2.turnOn()

