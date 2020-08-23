class Canvas {
    constructor(id) {
        this.canvas     = document.getElementById(id)
        this.context    = this.canvas.getContext('2d')
        this.width      = this.canvas.width
        this.height     = this.canvas.height
        this.imgLoaded  = 0
        this.bgSprites  = new Image()
        this.playerSprites  = new Image()

        this.setBackground = function (color) {
            this.context.fillStyle = color
            this.context.fillRect(0, 0, this.width, this.height)
        }

        this.loadImages = function () {
            this.bgSprites.src = "./assets/sprites-outlines.png"
            this.imgLoaded++
            this.playerSprites.src = "./assets/industrial2.png"
            this.imgLoaded++
        }

        this.drawBrick = function (x, y) {
            //this.context.clearRect(50, 50, 16, 16);

            this.context.drawImage(this.bgSprites, 184, 352, 16, 16, x, y, 16, 16)
        }

        this.drawPlayer = function (player) {
            this.context.drawImage(this.playerSprites, 1, 258, 14, 14, player.x, player.y, 16, 16)
        }
    }
}

