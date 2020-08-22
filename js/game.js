// Initiate Objects
const canvas    = new Canvas("game-canvas")
const width     = canvas.width
const height    = canvas.height

const player = new Entity(32, height-32)

// Set up input
const keys          = []
window.onkeyup      = (e) => { keys[e.code] = false; }
window.onkeydown    = (e) => { keys[e.code] = true }

// Game Variables
let hasJumped = false;

// Initialize Game
initialize()

// Game Loop
gameTick()

/***********
 * Functions
 */
function gameTick() {
    // Left/Right movement
    if (keys["ArrowRight"]) {
        if (player.getDX() < 3) {
            player.setDX(player.getDX()+1)
        }
    } else if (keys["ArrowLeft"]) {
        if (player.getDX() > -3) {
            player.setDX(player.getDX()-1)
        }
    } else {
        if (player.getDX() > 0) {
            player.setDX(player.getDX()-.1)
        } else if (player.getDX() < 0) {
            player.setDX(player.getDX()+.1)
        }
    }

    // Update Position
    player.updatePosition()
    console.log(player.getDX())

    canvas.setBackground("#000")
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
    if (canvas.imgLoaded == 1) {
        drawLevel()
        canvas.drawPlayer(player)
    }
}

function drawLevel() {
    for(let i = 0; i < level1.length; i++) {
        for(let j = 0; j < level1[0].length; j++) {
            if(level1[i][j] == 1) {
                canvas.drawBrick(j*16, i*16)
            }
        }
    }
}

