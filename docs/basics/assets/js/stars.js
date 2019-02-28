let canvas = null, stars = []

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    
    for(let i = 0; i < 1000; i++) {
        const x = Math.round(Math.random()*width)*((Math.round(Math.random()) == 1)?1:-1)
        const y = Math.round(Math.random()*height)*((Math.round(Math.random()) == 1)?1:-1)
        const z = Math.round(Math.random()*2000)
        const star = new Star(x, y, z)
        stars.push(star)
    }
    
}

function draw() {
    background(0)

    translate(0.5*width, 0.5*height)
    noStroke()

    for(let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.update()
        star.display()
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

class Star {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        this.color = [255, 255, 255]

        this.offsetX = 100*(this.x/this.z);
        this.offsetY = 100*(this.y/this.z);
        this.scaleZ = 0.0001*(2000-this.z);
    }

    display() {
        stroke(...this.color, 20)
        line(this.offsetX, this.offsetY, this.x, this.y)
        push()
        translate(this.offsetX, this.offsetY)
        scale(this.scaleZ)
        
        noStroke()
        fill(...this.color)
        ellipse(0,0,20,20)
        pop()
    }

    update() {
        this.z -= 10
        if (this.z <= 0) {
            this.x = Math.round(Math.random()*width)*((Math.round(Math.random()) == 1)?1:-1)
            this.y = Math.round(Math.random()*height)*((Math.round(Math.random()) == 1)?1:-1)
            this.z = Math.round(Math.random()*2000)
        }
        
        this.offsetX = 100*(this.x/this.z)
        this.offsetY = 100*(this.y/this.z)
        this.scaleZ = 0.0001*(2000-this.z)
    }
}