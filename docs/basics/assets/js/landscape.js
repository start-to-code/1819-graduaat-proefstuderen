let canvas = null, cols = 0, rows = 0, size = 20, terrain = [], flying = 0

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL)
    rePositionCanvas()
    cols = width / size
    rows = height / size
    //noLoop()

    stroke(...generateRandomColor())
    noFill()

    
}

function draw() {
    flying -= 0.1
    let yOffset = flying, xOffset = 0
    for(let y = 0; y < rows; y++) {
        terrain[y] = []
        xOffset = 0
        for(let x = 0; x < cols; x++) {
            terrain[y][x] = map(noise(xOffset, yOffset), 0, 1, -150, 150)
            xOffset += 0.1
        }
        yOffset += 0.1
    }

    background(0) 
    
    rotateX(PI/3)
    translate(-width/2, -height/2+50)

    for(let y = 0; y < rows-1; y++) {
        beginShape(TRIANGLE_STRIP)
        for(let x = 0; x < cols; x++) {
            //rect(x*size, y*size, size, size)
            vertex(x*size, y*size, terrain[y][x])
            vertex(x*size, (y+1)*size, terrain[y+1][x] )
        }
        endShape()
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

function generateRandomValue(min, max) {
    return min + Math.round(Math.random()*(max - min))
}