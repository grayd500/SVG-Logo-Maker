class Circle {
    constructor() {
        // Properties specific to Circle, if any.
    }

    render() {
        return `<circle cx="25" cy="75" r="20"/>`;
    }
}

module.exports = Circle;




// const Shape = require("./shapes");

// class Circle extends Shape {
//   constructor() {
//     super(); // Call the constructor of the parent class (Shape)
//   }

//   render() {
//     // Implement the rendering logic for a circle with the specified color
//     return `<svg width="100" height="100">
//       <circle cx="50" cy="50" r="50" fill="${this.color}" />
//     </svg>`;
//   }
// }

// module.exports = Circle;
