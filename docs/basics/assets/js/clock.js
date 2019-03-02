let canvas = null

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
    //noLoop()
    angleMode(DEGREES)
    noFill()
}

function draw() {
    background(0)

    const hours = hour()
    const minutes = minute()
    const seconds = second()

    let x = width/2
    let y = height/2
    let r = height/2

    //text(`${hours}:${minutes}:${seconds}`, 10, 200)

    translate(x, y)
    rotate(-90)

    strokeWeight(4)
    stroke(0, 184, 217)
    let endSeconds = map(seconds, 0, 60, 0, 360)
    arc(0, 0, r, r, 0, endSeconds)

    strokeWeight(8)
    stroke(255, 171, 0)
    const endMinutes = map(minutes, 0, 60, 0, 360)
    arc(0, 0, r-32, r-32, 0, endMinutes)

    strokeWeight(16)
    stroke(255, 86, 48)
    const endHours = map(hours % 12, 0, 12, 0, 360)
    arc(0, 0, r-108, r-108, 0, endHours)

    push()
    rotate(endSeconds)
    strokeWeight(4)
    stroke(0, 184, 217)
    line(0,0,100,0)
    pop()

    push()
    rotate(endMinutes)
    strokeWeight(8)
    stroke(255, 171, 0)
    line(0,0,80,0)
    pop()

    push()
    rotate(endHours)
    strokeWeight(16)
    stroke(255, 86, 48)
    line(0,0,80,0)
    pop()
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