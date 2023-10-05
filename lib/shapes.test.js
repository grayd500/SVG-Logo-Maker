const { Circle, Triangle, Square } = require('./shapes.js');



describe('Circle Class', () => {
    it('should render the correct SVG for a Circle', () => {
        const circle = new Circle('ABC', 'red', 'blue');
        const svgContent = circle.render();
        
        expect(svgContent).toContain('<circle');
        expect(svgContent).toContain('cx="150"');
        expect(svgContent).toContain('cy="100"');
        expect(svgContent).toContain('r="50"');
        expect(svgContent).toContain('fill="blue"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="red"');
        expect(svgContent).toContain('>ABC<');
    });
});

describe('Triangle Class', () => {
    it('should render the correct SVG for a Triangle', () => {
        const triangle = new Triangle('DEF', 'yellow', 'green');
        const svgContent = triangle.render();
        
        expect(svgContent).toContain('<polygon');
        expect(svgContent).toContain('points="50,15 10,180 190,180"');
        expect(svgContent).toContain('fill="green"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="yellow"');
        expect(svgContent).toContain('>DEF<');
    });
});

describe('Square Class', () => {
    it('should render the correct SVG for a Square', () => {
        const square = new Square('GHI', 'black', 'white');
        const svgContent = square.render();
        
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('x="50"');
        expect(svgContent).toContain('y="75"');
        expect(svgContent).toContain('width="100"');
        expect(svgContent).toContain('height="100"');
        expect(svgContent).toContain('fill="white"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="black"');
        expect(svgContent).toContain('>GHI<');
    });
});


