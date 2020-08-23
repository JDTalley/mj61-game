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
    for (let i = 1; i < level1.length - 1; i++) {
        for(let j = 1; j < level1[0].length - 1; j++) {
            if(level1[i][j] == 1) {
                canvas.drawBrick((j - 1)*16, (i - 1)*16)
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
    pX = (pos.x + 1)
    pY = (pos.y + 1)
    let blocks = {
        block: level1[pY][pX],
        blockDown: level1[pY + 1][pX],
        blockLeft: level1[pY][pX - 1],
        blockRight: level1[pY][pX + 1]
    }
    
    // Collisions
    switch (true) {
        case (blocks.blockDown == 1 && (player.y + 16) > (pos.y + 1) * 16):
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