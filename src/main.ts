export class Rectangle {

    constructor(
        public height, 
        public width
    ){}

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}