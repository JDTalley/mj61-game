// Initiate Objects
const uiCanvas      = new Canvas("ui-canvas")
const gameCanvas    = new Canvas("game-canvas")
const bgCanvas      = new Canvas("bg-canvas")
const width         = gameCanvas.width
const height        = gameCanvas.height

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
    bgCanvas.setBackground("#000")
}