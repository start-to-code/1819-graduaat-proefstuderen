let canvas = null, bubbles = []

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    
    for(let i = 0; i < 100; i++) {
        const x = generateRandomValue(0, width)
        const y = generateRandomValue(0, height)
        const bubble = new Bubble(x, y)
        bubbles.push(bubble)
    }    
    console.log(bubbles)
}

function draw() {
    background(0)

    for(let bubble of bubbles) {
        bubble.update()
        bubble.display()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)  
    rePositionCanvas()
}

function mousePressed() {
    for(let bubble of bubbles) {
        bubble.clicked()
    }
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

class Bubble {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.color = [255,255,255]
        this.r = 50
    }

    clicked() {
        let d = dist(mouseX, mouseY, this.x, this.y)
        if(d <= this.r) {
            // console.log(d)
        }
    }

    display() {
        stroke(...this.color)
        strokeWeight(4)
        noFill()
        ellipse(this.x, this.y, this.r)
    }

    update() {
        this.x = this.x + generateRandomValue(-5, 5)
        this.y = this.y + generateRandomValue(-5, 5)
    }
}

function generateRandomValue(min, max) {
    return min + Math.round(Math.random()*(max - min))
}