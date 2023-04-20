const {noise} = require('@chriscourses/perlin-noise')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Circle {
    constructor(x, y, radius, color, offset){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.offset = offset
    }

    draw(){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
    }

    update(){
        this.draw()
    }
}

const circles = []

for(let i = 0; i < 100; i++){
    circles.push(new Circle(canvas.width / 2, canvas.height / 2, 10, `hsl(${Math.random() * 255}, 50%, 50%)`, i * 0.01 ))
}

let time = 0

let animate=()=>{
    requestAnimationFrame(animate)
    context.fillStyle ='rgba(0, 0, 0, 0.01)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    circles.forEach(circle =>{
        circle.draw
         circle.x = noise(time + circles.offset + 20) * canvas.width
         circle.y = noise(time + circles.offset) * canvas.height
    })
    circle.draw();

    circle.x = noise(time + 30) * canvas.width
    circle.y = noise(time) * canvas.height
    time += 0.005
}