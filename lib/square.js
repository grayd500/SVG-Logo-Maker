const Shape = require("./shapesOld");

class Square extends Shape {
  constructor() {
    super(); // Call the constructor of the parent class (Shape)
  }

  render() {
    // Implement the rendering logic for a square with the specified color
    return `<svg width="100" height="100">
      <rect width="100" height="100" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = Square;
