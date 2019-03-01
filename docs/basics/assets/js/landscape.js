let canvas = null, cols = 0, rows = 0, size = 20

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    cols = width / size
    rows = height / size
    //noLoop()
    stroke(...generateRandomColor())
    noFill()
}

function draw() {
    background(0)
    
    

    for(let y = 0; y < rows; y++) {
        for(let x = 0; x < cols; x++) {
            rect(x*size, y*size, size, size)
        }
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
    return [r, g, b, 80]
}