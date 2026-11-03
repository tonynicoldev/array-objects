const circle={
  radius:0,
  area:0,
  colour: 'blue',
  
  init: function(radius, colour) {
    this.radius = radius;
    this.colour = colour;
    this.calcArea();
  },

  calcArea: function() {
    this.area = Math.PI * this.radius * this.radius;
  },

  setRadius: function(r) {
    this.radius=r;
    this.calcArea();
  },

  getArea: function() {
    return this.area;
  }
}

circle.init(10,'green');
console.log(`A ${circle.colour} circle of radius ${circle.radius} and area ${circle.area}`);

// Object properties are available to access so not encapsulated
circle.radius = 2;
circle.colour = 'red';
console.log(`A ${circle.colour} circle of radius ${circle.radius} and area ${circle.area}`);

// Functions are available
circle.setRadius(25);
console.log(`A ${circle.colour} circle of radius ${circle.radius} and area ${circle.getArea()}`);
