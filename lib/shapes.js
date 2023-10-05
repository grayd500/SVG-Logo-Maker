class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateSVG(shapeContent) {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeContent}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor, radius = 50) {
        super(logoText, textColor, shapeColor);
        this.radius = radius;
    }

    render() {
        const circleContent = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />`;
        return this.generateSVG(circleContent);
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    }

    render() {
    const triangleContent = `<polygon points="50,15 10,180 190,180" fill="${this.shapeColor}" />`;
    return this.generateSVG(triangleContent);    
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
        // Any square-specific properties, if needed
    }

    render() {
        const side = 100; 
        const squareContent = `<rect x="50" y="75" width="${side}" height="${side}" fill="${this.shapeColor}" />`; 
    return this.generateSVG(squareContent);
    }
}

export { Circle, Triangle, Square };
