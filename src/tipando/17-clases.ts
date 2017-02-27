export class Rectangle {

    constructor(
        public height: number, 
        public width: number
    ){}

    get area() {
        return this.calcArea();
    }

    private calcArea() {
        return this.height * this.width;
    }
}

let r0 = new Rectangle();
let r1 = new Rectangle("abc", "def");
let r2 = new Rectangle(1, 2);
r2.calcArea()
r2.