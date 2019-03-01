let canvas = null, angle = 0

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    fill(...generateRandomColor())
}

function draw() {
    background(0)

    translate(0.5*width, 0.5*height)

    noStroke()
    rectMode(CENTER)
    
    let offset = 0, speedX = 20, rectW = 10
    for(let x = 0;x < width; x += speedX) {
        const a = angle + offset
        const h = map(Math.sin(a), -1, 1, 0, height/2)
        rect(x - width / 2, 0, rectW, h)
        offset += 0.04
    }

    angle += 0.05
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