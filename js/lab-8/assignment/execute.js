function Ball(top = 10, left = 5, radius = 30, color = 'white') {
    this.top = top;
    this.left = left;
    this.radius = radius;
    this.color = color;
    this.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    this.toString = function () {
        return `Ball - Top: ${this.top}, Left: ${this.left}, Radius: ${this.radius}, Color: ${this.color}`;
    };
}

let balls = [
    new Ball(),
    new Ball(10, 20, 5, 'red'),
    new Ball(30, 15, 8, 'blue'),
    new Ball(5, 25, 3, 'green')
];

// A - Loop through an array to print colors and areas
balls.forEach(ball => {
    console.log(`Color: ${ball.color}, Area: ${ball.calculateArea()}`);
});

// B - Sort the array by top and left, then display the result as a table
balls.sort((a, b) => {
    if (a.top !== b.top) {
        return a.top - b.top;
    } else {
        return a.left - b.left;
    }
});

console.table(balls);