// Initiate Objects
const canvas    = new Canvas("game-canvas")
const width     = canvas.width
const height    = canvas.height

const player = new Entity(32, height-32)

// Set up input
const keys          = []
window.onkeyup      = (e) => { keys[e.code] = false; }
window.onkeydown    = (e) => { keys[e.code] = true }

// Initialize Game
initialize()

// Game Loop
gameTick()

/***********
 * Functions
 */
function gameTick() {
    redrawCanvas()

    queueTick()
}

function initialize() {
    canvas.setBackground("#000")
    canvas.loadImages()
}

function queueTick() {
    requestAnimationFrame(gameTick)
}

function redrawCanvas() {
    drawLevel()
    canvas.drawPlayer(player)
}

function drawLevel() {
    if (canvas.imgLoaded == 1) {
        for(let i = 0; i < level1.length; i++) {
            for(let j = 0; j < level1[0].length; j++) {
                if(level1[i][j] == 1) {
                    canvas.drawBrick(j*16, i*16)
                }
            }
        }
/*         canvas.drawBrick(0, 0)
        canvas.drawBrick(width-16, height-16)
        canvas.drawBrick(width-16, 0)
        canvas.drawBrick(0, height-16) */
    }
}

