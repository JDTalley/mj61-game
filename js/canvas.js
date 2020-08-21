function Canvas(id) {
    this.canvas     = document.getElementById(id)
    this.context    = this.canvas.getContext('2d')
    this.width      = this.canvas.width
    this.height     = this.canvas.height
    
    this.setBackground = function(color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.width, this.height)
    }
}
