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

    setY(num) {
        this.y = num
    }

    setDX(num) {
        this.dx = num
    }

    setDY(num) {
        this.dy = num
    }

    // Movement
    updatePosition() {
        this.x += this.dx
        this.y += this.dy

        if (this.dx < 1) {
            this.dx = 0
        }
    }
}