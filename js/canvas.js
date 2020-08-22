class Canvas {
    constructor(id) {
        this.canvas         = document.getElementById(id)
        this.context        = this.canvas.getContext('2d')
        this.width          = this.canvas.width
        this.height         = this.canvas.height
        this.imgLoaded      = 0
        this.spriteSheet    = new Image()

        this.setBackground = function (color) {
            this.context.fillStyle = color
            this.context.fillRect(0, 0, this.width, this.height)
        }

        this.loadImages = function () {
            this.spriteSheet.src = "./assets/sprites-outlines.png"
            this.imgLoaded++
        }

        this.drawBrick = function (x, y) {
            //this.context.clearRect(50, 50, 16, 16);

            this.context.drawImage(this.spriteSheet, 184, 352, 16, 16, x, y, 16, 16)
        }

        this.drawPlayer = function (player) {
            this.context.drawImage(this.spriteSheet, 136, 256, 16, 16, player.getX, player.getY, 16, 16)
        }
    }
}

