let canvas = null

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    //noLoop()
}

function draw() {
    background(0)
    
    noStroke()
    /*rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)*/
    for(let i = 0; i < 1000; i++) {
        const x = Math.round(Math.random()*width)
        const y = Math.round(Math.random()*height)
        const r = Math.round(Math.random()*60)+16
        fill(...generateRandomColor())
        ellipse(x, y, r, r)
    }
    /*for(let i = 0; i < 100; i++) {
        const x = Math.round(Math.random()*width)
        const y = Math.round(Math.random()*height)
        const r = Math.round(Math.random()*60)+16
        translate(x, y);
        box(r, r, r)
    }*/
    
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
    return [r, g, b, 80]
}