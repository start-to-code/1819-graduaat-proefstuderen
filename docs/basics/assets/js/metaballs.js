let canvas = null, balls = []

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    
    for(let i = 0; i < 10000; i++) {
        const x = Math.round(Math.random()*width)
        const y = Math.round(Math.random()*height)
        const speed = Math.round(Math.random()*10)+10
        const ball = new Ball(x, y, speed)
        balls.push(ball)
    }
    
}

function draw() {
    background(0)
    
    for(let i = 0; i < balls.length; i++) {
        const ball = balls[i]
        ball.update()
        ball.display()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)  
    rePositionCanvas()
}

function rePositionCanvas() {
    canvas.position(0, 0) //Center Canvas
}

function generateRandomColor() {
    const r = Math.round(Math.random()*255)
    const g = Math.round(Math.random()*255)
    const b = Math.round(Math.random()*255)
    return [r, g, b]
}

class Blob {
    PVector 
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.r = 40
    }

    display() {
        noFill()
        stroke(255)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }

    update() {
        /*if (this.x + this.speedX > width || this.x + this.speedX < 0) {
            this.speedX *= -1
        } else {
            this.x += this.speedX
        }
        
        if (this.y + this.speedY > height || this.y + this.speedY < 0) {
            this.speedY *= -1
        } else {
            this.y += this.speedY
        }*/
    }
}