class Entity {
    constructor(x, y) {
        this.x      = x
        this.y      = y
        this.dx     = 0
        this.dy     = 0
        this.jerk   = 0
    }

    // Getters
    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getDX() {
        return this.dx
    }

    getDY() {
        return this.dy
    }

    // Setters
    setX(num) {
        this.x = num
    }

    getY(num) {
        this.y = num
    }

    getDX(num) {
        this.dx = num
    }

    getDY(num) {
        this.dy = num
    }
}