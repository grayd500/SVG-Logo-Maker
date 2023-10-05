




// add exports

// class Shape {
//     constructor(width = 100, height = 100) { // Initialize with default dimensions of 100x100       
//         this.width = width; //allow you to set the dimensions of the shape when creating an instance.
//         this.height = height; // allow you to set the dimensions of the shape when creating an instance.
//         this.color = "black"; // Default color
//       }

//       setDimensions(width, height) {
//         // Validate and set the dimensions
//         if (width > 0 && height > 0) {
//           this.width = width;
//           this.height = height;
//         } else {
//           console.error("Invalid dimensions. Please provide positive values.");
//         }
//       }
  
//       setColor(color) {
//         // Validate and set the color
//         if (/^#([0-9A-F]{3}){1,2}$/i.test(color) || // Check for valid hexadecimal color
//             ["red", "blue", "green", "yellow", "black", "white"].includes(color)) { // Check for named colors
//           this.color = color;
//         } else {
//           console.error("Invalid color. Please provide a valid color name or hexadecimal code.");
//         }
//       }
  
//       render() {
//         // This is a placeholder, each child class will override this method
//         return "";
//       }
//     }
  
//   module.exports = Shape;
  