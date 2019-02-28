let canvas = null, rain = []

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    
    for(let i = 0; i < 10000; i++) {
        const x = Math.round(Math.random()*width)
        const y = -Math.round(Math.random()*height)
        const speed = 10+Math.round(Math.random()*height/8)
        const len = 2+Math.round(Math.random()*height/16)
        const w = 1+Math.round(Math.random()*4)
        const drop = new Drop(x, y, speed, len, w)
        rain.push(drop)
    }
    
}

function draw() {
    background(0)

    noStroke()

    for(let i = 0; i < rain.length; i++) {
        const drop = rain[i]
        drop.update()
        drop.display()
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

class Drop {
    constructor(x, y, speed, len, w) {
        this.x = x
        this.y = y
        this.color = [0, 255, 0]

        this.speedY = speed
        this.len = len
        this.w = w
    }

    display() {
        strokeWeight(this.w)
        stroke(...this.color, 80)
        line(this.x, this.y, this.x, this.y+this.len)
    }

    update() {
        this.y += this.speedY
        if (this.y > height) {
            this.y = -Math.round(Math.random()*height)
        }
    }
}