// Initiate Objects
const canvas    = new Canvas("game-canvas")
const width     = canvas.width
const height    = canvas.height
let dt          = 0
let prevTime    = window.performance.now()

const player    = new Entity(160, height-32)
let playerPos   = {
    x: 0,
    y: 0
}

// Set up input
const keys          = []
window.addEventListener("keyup", (e) => { keys[e.code] = false; })
window.addEventListener("keydown", (e) => { keys[e.code] = true })

// Game Variables
let isJumping = false

// Initialize Game
initialize()

/***********
 * Functions
 */
function gameTick(timestamp) {
    requestAnimationFrame(gameTick)

    dt = (timestamp - prevTime) / 1000
    prevTime = timestamp

    update(dt)

    redrawCanvas()
}

function initialize() {
    canvas.setBackground("#000")
    canvas.loadImages()
    if (canvas.imgLoaded == 2) {
        // Game Loop
        requestAnimationFrame(gameTick)
    }
}

function update(dt) {
    getInput()
    player.updatePosition(dt)
    playerPos = calcGameGrid(player)
    checkCollision(playerPos)
}

function getInput() {
    // Left/Right movement
    if (keys["ArrowRight"]) {
        player.setDX(500)
    } else if (keys["ArrowLeft"]) {
        player.setDX(-500)
    }

    // Jump
    if (keys["Space"] && !isJumping) {
        player.setDY(-500)
        isJumping = !isJumping
    }
}

function redrawCanvas() {
    canvas.setBackground("#000")
    drawLevel()
    canvas.drawPlayer(player)
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

function calcGameGrid(entity) {
    let x = Math.floor(entity.x / 16)
    let y = Math.floor(entity.y / 16)

    return ({
        x: x, 
        y: y
    })
}

function checkCollision(pos) {
    let blocks = {
        block: level1[pos.y][pos.x],
        blockDown: level1[pos.y + 1][pos.x],
        blockLeft: level1[pos.y][pos.x - 1],
        blockRight: level1[pos.y][pos.x + 1]
    }

    switch (true) {
        case (blocks.blockDown == 1 && (player.y + 16) > (pos.y + 1) * 16):
            console.log(blocks.blockDown)
            player.y = ((pos.y + 1) * 16) - 16
            player.setDY(0)
            isJumping = !isJumping
            break;
        case (blocks.block == 1):
            player.y = ((pos.y + 1) * 16)
            player.setDY(0)
            break;
    }
}