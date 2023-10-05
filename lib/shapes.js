class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // Shared methods or properties for all shapes
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor, radius = 50) {
        super(logoText, textColor, shapeColor);
        this.radius = radius;
    }

    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="125" r="${this.radius}" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
        // Any triangle-specific properties, if needed
    }

    render() {
        // Some logic to determine the triangle's points based on desired dimensions
    const points = "50,15 10,180 190,180"; // Example for a triangle
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
        // Any square-specific properties, if needed
    }

    render() {
        const side = 100; // Default side length for this example
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="75" width="${side}" height="${side}" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
    }
}

export { Circle, Triangle, Square };
