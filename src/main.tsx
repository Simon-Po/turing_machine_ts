import './index.css'

const canvas = document.querySelector('#machine') as HTMLCanvasElement | null

if (!canvas) {
  throw new Error('Canvas element with id "machine" not found.')
}

const ctx = canvas.getContext('2d')

if (!ctx) {
  throw new Error('2D context not available.')
}

// Set canvas size
canvas.width = 800 
canvas.height = 400 

// Draw something simple
ctx.fillStyle = 'black'
// clear background
ctx.fillRect(0, 0, canvas.width, canvas.height)


ctx.strokeStyle = 'white'
ctx.strokeRect(10,10,200,200)

