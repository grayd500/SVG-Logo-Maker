const Shape = require("./shapesOld");

class Triangle extends Shape {
  constructor() {
    super(); // Call the constructor of the parent class (Shape)
  }

  render() {
    // Implement the rendering logic for a triangle with the specified color
    return `<svg width="100" height="100">
      <polygon points="50,0 0,100 100,100" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = Triangle;
