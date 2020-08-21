// Initiate Objects
const canvas    = new Canvas("game-canvas")
const width     = canvas.width
const height    = canvas.height

// Set up input
const keys = []
window.onkeyup = (e) => { keys[e.code] = false; }
window.onkeydown = (e) => { keys[e.code] = true }

// Initialize Game
initialize()


/***********
 * Functions
 */
function initialize() {
    canvas.setBackground("#000")
}