class Circle {
  #radius; // # means private. Public by default
  #colour;

  constructor(radius, colour) {
    this.#radius = radius;
    this.#colour = colour;
  }

  setColour() {
    this.#colour = 'yellow';
  }

  setRadius(radius) {
    this.#radius = radius;
  }

  getColour() {
    return this.#colour;
  }

  getRadius(radius) {
    return this.#radius;
  }

  getArea() {
    return Math.PI * this.#radius ** 2;
  }
}

const c1 = new Circle(10, 'red');
const c2 = new Circle(20, 'blue');

console.log(`A ${c1.getColour()} circle of radius ${c1.getRadius()} and area ${c1.getArea()}`);
console.log(`A ${c2.getColour()} circle of radius ${c2.getRadius()} and area ${c2.getArea()}`);